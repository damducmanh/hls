import styled from 'styled-components';
import { variables } from './global-styles';
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1600px',
  desktopL: '1600px',
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
};
export const HomeContainer = styled.div`
  padding: 0;
  .container {
    padding-left: 17.8%;
    padding-right: 17.8%;
    @media ${device.laptop} {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const Header = styled.header`
  box-shadow: 0px 10px 10px -11px #00000073;
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 11px;
    padding-bottom: 11px;
    &__logo {
      img {
        width: 78px;
        @media ${device.laptop} {
          width: 58px;
        }
      }
    }

    &__account {
      display: flex;
      &__info {
        color: #969696;
        text-align: right;
        padding-right: 15px;
        display: flex;
        align-items: center;
        span {
          color: #4b4b4b;
        }
      }
      &__avatar {
        display: flex;
        align-items: center;
        img {
          width: 68px;
          height: 68px;
          object-fit: cover;
          border-radius: 50%;
          overflow: hidden;
          @media ${device.laptop} {
            width: 48px;
            height: 48px;
          }
        }
      }
    }
  }
`;

export const BannerSection = styled.div`
  background-color: ${variables.mainGreenColor};

  .title {
    text-align: center;
    padding: 90px 0 80px 0;
    color: ${variables.mainWhiteColor};
    @media ${device.mobileL} {
      padding: 40px 0 30px 0;
    }
    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
    @media ${device.laptop} {
      h2 {
        font-size: 20px;
      }
    }
  }
`;

export const StoriesSection = styled.div`
  margin-top: 68px;
  margin-bottom: 50px;
  @media ${device.mobileL} {
    margin-top: 28px;
    margin-bottom: 30px;
  }
  .stories {
    color: #646464;
    font-weight: 600;
    padding: 0 15px;
    @media ${device.mobileL} {
      font-size: 14px;
    }
  }
  .actions {
    display: flex;
    justify-content: center;
    margin: 50px 0;
    padding-top: 50px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 80%;
      left: 10%;
      min-width: 300px;
      height: 1px;
      background-color: #ececec;
    }
    button {
      cursor: pointer;
      margin: 0 15px;
      border: none;
      outline: none;
      width: 270px;
      height: 50px;
      color: ${variables.mainWhiteColor};

      &:nth-child(1) {
        background-color: #2c7edb;
        border-bottom: 3px solid #1c69c0;
      }

      &:nth-child(2) {
        background-color: ${variables.mainGreenColor};
        border-bottom: 3px solid #19984e;
      }
      @media ${device.mobileL} {
        width: 150px;
        height: 40px;
      }
    }
  }
`;

export const FooterStyled = styled.footer`
  text-align: center;
  padding: 42px 0;
  border-top: 1px solid #cccccc;
  color: #969696;
  font-weight: 600;
  font-size: 14px;
  @media ${device.mobileL} {
    padding: 22px 0;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 294.5px);
  @media ${device.mobileL} {
    min-height: calc(100vh - 320px);
  }
`;
