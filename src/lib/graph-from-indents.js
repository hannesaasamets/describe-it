const DEFAULT_INDENT_LENGTH = 2;
const ROOT_LEVEL_ID = null;

const jsonToJest = (json, level = 0, indentLength = DEFAULT_INDENT_LENGTH) =>
  json.map(({ children, content }, index) => {
    const indentation = ' '.repeat(level * indentLength);
    const blockName = children.length ? 'describe' : 'it';
    const extraLine = index ? '\n' : '';

    const blockLines = [
      `${extraLine}${indentation}${blockName}('${content}', () => {`,
      jsonToJest(children, level + 1),
      `${indentation}});`,
    ];

    return blockLines
      .filter(Boolean)
      .join('\n');
  }).join('\n');

const nestJson = (nodes, id = ROOT_LEVEL_ID) =>
  nodes
    .filter(({ parent }) => parent === id)
    .map(node => ({
      ...node,
      children: nestJson(nodes, node.id),
    }));

const regexIndentation = /^(?<indent>(?: {2})*)(?<content>\S.*)/;

const parseTree = (lines, indentLength = DEFAULT_INDENT_LENGTH) => {
  // Parse an indented outline
  const stack = [];

  return lines.map((line, index) => {
    const match = line.match(regexIndentation);
    const level = match.groups.indent.length / indentLength;
    const content = match.groups.content;

    stack[level] = index;

    return {
      id: index,
      content,
      parent: level
        ? stack[level - 1]
        : ROOT_LEVEL_ID,
    };
  });
};

const errorMessage = (lineNr, message) => `Line ${lineNr + 1}: ${message}`;

const lintTree = (lines, indentLength = 2) => {
  const stack = [];

  const errors = lines
    .map((line, index) => {
      const match = line.match(regexIndentation);

      if (!match) {
        return errorMessage(index, `Indentation not a multiple of ${indentLength} spaces`);
      }

      const level = match.groups.indent.length / indentLength;

      if (level > stack.length) {
        return errorMessage(index, `Indentation too deep`);
      }

      stack[level] = index;
    });

  return errors
    .filter(Boolean)
    .join('\n');
};

const example = `A
  B
  C
    D
      E
  F
  G
H`;

const nonEmptyString = line =>
  line.trim();
const ceilOddIndents = line =>
  line.match(regexIndentation)
    ? line
    : ` ${line}`;
const sanitize = lines => lines
  .filter(nonEmptyString)
  .map(ceilOddIndents);

const main = (raw = example) => {
  const rawLines = raw.split('\n');
  const lines = sanitize(rawLines);
  const lintErrors = lintTree(lines);

  if (lintErrors) {
    return lintErrors;
  }

  const flat = parseTree(lines);
  const nested = nestJson(flat);

  return jsonToJest(nested);
}

export default main;
