import {
  BannerSection,
  FooterStyled,
  Header,
  HomeContainer,
  Main,
  StoriesSection,
} from './homeStyled';
import { useEffect, useState } from 'react';
import {
  actionStory,
  bannerContent,
  footerContent,
  mockStories,
  warningEmptyStory,
} from './mock/data';
import { getAssessmentInCookie, setAssessmentToCookie } from './utils/cookieStorage';
import avatar from './assets/images/avatar.jpeg';
import logo from './assets/images/logo.png';
import GlobalStyle from './global-styles';
import { FUNNY_STATUS } from './constants/common';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const assessments = getAssessmentInCookie();
    updateAssessment(assessments);
  }, []);

  const getStoryCurrent = () => {
    return (stories || []).shift();
  };

  const updateAssessment = (data) => {
    const storiesResultUpdate = mockStories.filter((story) => !data.find((e) => e.id === story.id));
    setStories(storiesResultUpdate);
  };

  const handleAssessmentStory = (storyId, isFunny) => {
    const assessmentsInCookie = getAssessmentInCookie() || [];
    const assessmentsUpdate = [...assessmentsInCookie, { id: storyId, isFunny }];
    updateAssessment(assessmentsUpdate);
    setAssessmentToCookie(assessmentsUpdate);
  };

  const renderStories = () => {
    const storyCurrent = getStoryCurrent();
    if (storyCurrent) {
      return (
        <>
          <div>{storyCurrent.story}</div>
          <div className="actions">
            <button onClick={() => handleAssessmentStory(storyCurrent.id, FUNNY_STATUS.FUNNY)}>
              {actionStory.likeStory}
            </button>
            <button onClick={() => handleAssessmentStory(storyCurrent.id, FUNNY_STATUS.NOT_FUNNY)}>
              {actionStory.dislikeStory}
            </button>
          </div>
        </>
      );
    }
    return warningEmptyStory;
  };

  return (
    <HomeContainer>
      <GlobalStyle />
      <Header>
        <div className="header container">
          <div className="header__logo">
            <img src={logo} alt={logo} />
          </div>
          <div className="header__account">
            <div className="header__account__info">
              <div>
                Handicrafted by <br /> <span>Jim HLS</span>
              </div>
            </div>
            <div className="header__account__avatar">
              <img src={avatar} alt={avatar} />
            </div>
          </div>
        </div>
      </Header>
      <Main>
        <BannerSection>
          <div className="title">
            <h2>{bannerContent.title}</h2>
            <p>{bannerContent.description}</p>
          </div>
        </BannerSection>
        <StoriesSection className="container">
          <div className="stories">{renderStories()}</div>
        </StoriesSection>
      </Main>
      <FooterStyled className="container">
        <div className="footer-content">
          <p>{footerContent.intro}</p>
        </div>
        <div className="copy-right">{footerContent.copyRight}</div>
      </FooterStyled>
    </HomeContainer>
  );
}

export default App;
