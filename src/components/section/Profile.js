import classes from "./Profile.module.css";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileimg from "../../img/photo.png";
const Profile = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section id='about'>
      <Container>
        <div className={classes.profile}>
          <div className={classes.profilePhoto} data-aos='fade-up' data-aos-duration='1500'>
            <img src={profileimg} alt='프로필' />
          </div>
          <div className={classes.profileText}>
            <SectionTitle title='ABOUT ME' content='"만두" 이야기를 아시나요?'>
              <br />
              혜주일<span className={classes.mando}>만두</span> 하지!
            </SectionTitle>
            {/* <span className={.desc}></span> */}
            <div className={classes.left}>
              <h3>교육수료 및 경력</h3>
              <p data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1000'>
                2021년 12월 ~ 2022년 08월 <span>이엑스마루 퍼블리셔 근무</span>
              </p>
              <div className={classes.lineWrap}>
                <div className={classes.line} data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'></div>
              </div>
              <p data-aos='fade-down' data-aos-duration='1000'>
                2022년 11월 ~ 2023년 05월 <span>그린컴퓨터아트학원 프론트과정 수료</span>
              </p>
              <div className={classes.lineWrap}>
                <div className={classes.line} data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1500'></div>
              </div>
              <p data-aos='fade-down' data-aos-duration='1000' data-aos-delay='2000'>
                2020년 11월 ~ 2021년 04월 <span>더조은컴퓨터아트학원 퍼블리셔 과정 수료</span>
              </p>
            </div>
            <div className={classes.right}>
              <h3>자격</h3>
              <p data-aos='fade-down' data-aos-duration='1000'>
                2021년 04월 <span>웹디자인기능사 취득</span>
              </p>
              <div className={classes.lineWrap}>
                <div className={classes.line} data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'></div>
              </div>
              <p data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1000'>
                2015년 07월 <span>컴퓨터그래픽스운용기능사 취득</span>
              </p>
            </div>
            <div
              className={classes.btn}
              onClick={() => {
                window.open("https://blog.naver.com/hejo_47");
              }}
            >
              블로그 보기
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Profile;
