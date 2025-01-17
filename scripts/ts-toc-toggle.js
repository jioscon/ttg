(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const tocWrapper = document.querySelector('.ts-toc-wrapper');
    const tocHeader = document.querySelector('.ts-toc-header');
    const mediaQuery = window.matchMedia('(min-width: 576px)');

    if (!tocWrapper || !tocHeader) {
      console.warn('TOC 요소를 찾을 수 없습니다.');
      return;
    }

    /**
     * 모바일에서만(close-mobile) close인 경우 데스크탑에서는 open
     */
    function changeTocState(isDesktop) {
      const currentState = tocWrapper.getAttribute('data-toc');
      if (isDesktop) {
        tocWrapper.setAttribute(
          'data-toc',
          currentState === 'close-mobile' ? 'open' : currentState
        );
      }
    }
    changeTocState(mediaQuery.matches);

    /**
     * TOC 토글 기능
     */
    function toggleToc() {
      const currentState = tocWrapper.getAttribute('data-toc');
      const isOpen = currentState === 'open';
      tocWrapper.setAttribute('data-toc', isOpen ? 'close' : 'open');
    }
    tocHeader.addEventListener('click', toggleToc);
  });
})();
