<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<footer>
  <p />
</footer>

<style>
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
