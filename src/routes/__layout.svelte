<script>
  import '../app.css';
  import Fab from '@smui/fab';
</script>

<main>
  <slot />
</main>

<footer>
  <a href="https://github.com/hannesaasamets/describe-it">
    <Fab
      color="error"
      class="fab"
    >
      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    </Fab>
  </a>
</footer>

<style>
  * :global(.fab) {
    background-color: #cecece;
  }

  main::before {
    background: #fafafa;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    content: '';
    display: block;
    height: 162px;
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.3;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
    transition: 0.6s all cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (min-width: 1280px) {
    main {
      padding: 0 3rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
