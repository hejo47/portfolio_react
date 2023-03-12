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
            <SectionTitle title='ABOUT ME' content='혹시 만두 이야기를 아시나요?'>
              <br />
              혜주일만두 하지!
            </SectionTitle>
            <span className={classes.desc}>
              안녕하세요. 저는 프론트 개발자를 꿈꾸고 있습니다. <br />
              멋진 웹 경험은 쉽고 간편하지만 정확한 상호작용에서 생깁니다. <br />
              남녀노소 이용에 부담이 없는 웹 페이지를 만들고 있습니다. 언제나 웹 페이지 사용자의 멋진 경험을 위해 노력합니다.
            </span>
            <div
              className={classes.btn}
              onClick={() => {
                window.open("https://www.saramin.co.kr/zf_user/member/resume/view/edit_icon_fl/y/mandb_view/n/res_idx/18337749");
              }}
            >
              이력서 보기
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Profile;
