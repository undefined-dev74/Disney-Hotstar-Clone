import React from 'react';
import { Container, ShareBox } from './main.styled';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img
            src="https://img-premium.flaticon.com/png/512/552/premium/552909.png?token=exp=1632635945~hmac=43cb80cce63f6edfaef28924ba623b7f"
            alt="UserIcon"
          />
          <button>start a post</button>
        </div>
        <div>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833453.png"
              alt="pic"
            />
            <span>Photo</span>
          </button>

          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1160/1160284.png"
              alt="Video"
            />
            <span>Video</span>
          </button>

          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3143/3143636.png"
              alt="Event"
            />
            <span>Event</span>
          </button>

          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/610/610138.png"
              alt="Article"
            />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

export default Main;
