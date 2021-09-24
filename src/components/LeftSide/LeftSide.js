import { faHashtag, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  AddPhotoText,
  ArtCard,
  CardBackground,
  CommunityCard,
  Container,
  Item,
  Photo,
  UserInfo,
  Widget,
} from './leftSide.styled';

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              <h3>Welcome, there!</h3>
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>connection</span>
              <span>Grow your network</span>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5694/5694726.png"
              alt="NetworkIcon"
            />
          </a>
        </Widget>
        <Item>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709631.png"
              alt="bookmark"
            />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>
            Groups
            <FontAwesomeIcon icon={faUsers} />
          </span>
        </a>
        <a>
          <span>
            Events
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </a>
        <a>
          <span>
            follow Hashtags
            <FontAwesomeIcon icon={faHashtag} />
          </span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

export default LeftSide;
