import React, {useEffect, useState} from "react";
import '../styles/home.scss';

const HomePage = () => {

  useEffect(() => {
    const setYokoScroll = () => {
      const scrollContainers = Array.from(
        document.getElementsByClassName("scroll_container")
      );

      scrollContainers.forEach((scrollContainer) => {
        const scrollWrapper = scrollContainer.getElementsByClassName(
          "scroll_wrapper"
        )[0];
        const scrollContent = scrollContainer.getElementsByClassName(
          "scroll_content"
        )[0];
        const height =
          scrollWrapper.clientHeight +
          scrollContent.clientWidth -
          scrollWrapper.clientWidth;
        scrollContainer.style.height = `${height}px`;
      });

      const handleScroll = () => {
        scrollContainers.forEach((scrollContainer) => {
          const scrollWrapper = scrollContainer.getElementsByClassName(
            "scroll_wrapper"
          )[0];
          const scrollContent = scrollContainer.getElementsByClassName(
            "scroll_content"
          )[0];
          const containerTop = scrollContainer.offsetTop;
          let scrollY = window.scrollY - containerTop;
          const maxMoveX =
            scrollContent.clientWidth - scrollWrapper.clientWidth;
          scrollY = scrollY < 0 ? 0 : scrollY > maxMoveX ? maxMoveX : scrollY;
          scrollContent.style.transform = `translate3d(${-scrollY}px, 0, 0)`;
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    setYokoScroll();
  }, []);

  const corporateSpan = 'Corporate Site';
  const recruitmentSpan = 'Recruitment Site';
  const ecSpan = 'EC Site';

  const [scrollYY, setScrollYY] = useState(0);
  const [navPosition, setNavPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollYY(currentScrollY);
      const navbarRect = document.getElementById('bottom_menu').getBoundingClientRect();
      const navbarPosition = navbarRect.top + currentScrollY;
      setNavPosition(navbarPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  const maxLeft = window.innerWidth - 50;
  const rotateValue = scrollYY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const leftValue = (scrollYY / maxScroll) * maxLeft;

  useEffect(() => {
    const navbar = document.getElementById('bottom_menu');
    if (navbar) {
      navbar.classList.toggle('hit', navPosition >= 1399);
      navbar.classList.toggle('unhit', navPosition < 1399);
    }
  }, [navPosition]);

  const kokoroStyle = {
    left: `${leftValue}px`,
    transform: `rotate(${rotateValue}deg)`,
  }

  return (
    <>
      <h2 class="header">フロントエンドUIUX</h2>
      <div class="link">
        <a href="#">制作依頼・ご相談</a>
        <a href="#">資料ダウンロード</a>
      </div>
      <div class="area-service1">
        <h3>おしらせ</h3>
        <ul class="list-information">
          <li class="info">
            <a href="#">
              <div class="date">2023.11.29</div>
              <span class="information">会社資料をダウンロードいただけるようになりました</span>
            </a>
          </li>
          <li class="info">
            <a href="#">
              <div class="date">2023.11.01</div>
              <span class="information">ホームページリニューアルのお知らせ</span>
            </a>
          </li>
          <li class="info">
            <a href="#">
              <div class="date">2023.04.28</div>
              <span class="information">ゴールデンウィーク休業のお知らせ</span>
            </a>
          </li>
          <li class="info">
            <a href="#">
              <div class="date">2023.04.11</div>
              <span class="information">LINE公式アカウント開設しました</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="area-service2 scroll_container">
        <div class="scroll_wrapper">
          <h3>サービス</h3>
          <div class="items scroll_content">
            <div class="item">
              <article class="container">
                <h2><span class="corporate" data-content={corporateSpan}>コーポレートサイト</span></h2>
              </article>
              <div class="more" >
                <a href="#" class="btn-more">
                  <span class="text">
                    <b>VIEW MORE</b>
                  </span>
                </a>
              </div>
            </div>
            <div class="item">
              <article class="container">
                <h2><span class="recruitment" data-content={recruitmentSpan}>採用サイト</span></h2>
              </article>
              <div class="more">
                <a href="#" class="btn-more">
                  <span class="text">
                    <b>VIEW MORE</b>
                  </span>
                </a>
              </div>
            </div>
            <div class="item">
              <article class="container">
                <h2><span class="ec" data-content={ecSpan}>ECサイト</span></h2>
              </article>
              <div class="more">
                <a href="#" class="btn-more">
                  <span class="text">
                    <b>VIEW MORE</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="area-service3">
        <h3>制作実績</h3>
      </div>
      <div id="bottom_menu">
        <nav>
          <ul class="menu">
            <li>
              <a>TOP</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>IMAGES</a>
            </li>
            <li>
              <a>FEATURES</a>
            </li>
            <li>
              <a>LINEUP</a>
            </li>
            <li>
              <a>STORES</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="korokoro" style={kokoroStyle}></div>
    </>
  )
}

export default HomePage;