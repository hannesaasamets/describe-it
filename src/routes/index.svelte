<script context="module">
  export const prerender = true;
</script>

<script>
  import Card, { Content, Actions, ActionIcons } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import Wrapper from '@smui/touch-target';
  import graphFromIndents from '$lib/graph-from-indents';
  import example from '$lib/example';

  let value = example;
  $: parsed = graphFromIndents(value);

  const onInput = event => adjustInputHeight(event.target);
  const adjustInputHeight = (target) => {
    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
  };
</script>
<svelte:head>
  <title>Describe It with indented text</title>
</svelte:head>

<section>
  <h1 class="visually-hidden">
    Indented text to tests
  </h1>

  <div class="card-container" style="width: 100%">
    <Card class="card" style="flex-direction: row;">
      <div class="column">
        <Content style="flex: 1; display:flex; padding: 20px 24px;">
          <textarea
            class="text"
            style="height: 280px"
            bind:value={value}
            on:input={onInput}
            use:adjustInputHeight
          ></textarea>
        </Content>
      </div>
      <div class="column second-column">
        <Content style="flex: 1; display:flex; padding: 20px 24px;">
          <pre class="describe-it text"><code>{ parsed }</code></pre>
        </Content>
        <Actions>
          <ActionIcons>
            <Wrapper>
              <IconButton
                on:click={() => navigator.clipboard.writeText(parsed)}
                aria-label="Copy to clipboard"
                title="Copy to clipboard"
              >
                <Icon class="material-icons">content_copy</Icon>
              </IconButton>
            </Wrapper>
          </ActionIcons>
        </Actions>
      </div>
    </Card>
  </div>
</section>

<style>
  * :global(.card) {
    border-radius: 0;
  }

  @media (min-width: 1280px) {
    * :global(.card) {
      border-radius: 0.5rem;
    }
  }

  .column {
    flex: 1;
    color: #707070;
    background-color: #fff;
  }

  .second-column {
    color: #404040;
    background-color: #f5f5f5;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  textarea {
    flex: 1;
    min-height: 74px;
    outline: none;
    border: none;
    resize: none;
    padding: 0;
    white-space: pre-wrap;
    background: var(--theme-background);
    overflow: auto hidden;
    height: 100%;
    opacity: .85;
  }

  .describe-it {
    padding: 0;
    box-shadow: none;
    background: var(--theme-background);
    margin: 0;
    opacity: .75;
  }

  .text {
    color: var(--theme-text);
    font-family: Roboto Mono,RobotoDraft,Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 28px;
  }

  section {
    margin-top: 8.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    z-index: -1000;
  }
</style>
