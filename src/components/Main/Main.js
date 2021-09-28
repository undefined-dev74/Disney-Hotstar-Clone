import React from 'react';
import {
  Article,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImg,
  SocialActions,
  SocialCounts,
} from './main.styled';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/560/560216.png"
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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img
                src="https://cdn-icons-png.flaticon.com/512/599/599305.png  "
                alt="UserIcon"
              />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/860/860760.png"
                alt="Options"
              />
            </button>
          </SharedActor>
          <Description>
            Description
            <SharedImg>
              <img
                src="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8am9ic3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="img"
              />
            </SharedImg>
            <SocialCounts>
              <li>
                <button>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                    alt="Like"
                  />
                  <img
                    src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                    alt="clap"
                  />
                  <span>75</span>
                </button>
              </li>
              <li>
                <a>2 comments</a>
              </li>
            </SocialCounts>
            <SocialActions>
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/456/456115.png"
                  alt="like"
                />
                <span>Like</span>
              </button>
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"
                  alt="comments"
                />
                <span>Comments</span>
              </button>
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828874.png"
                  alt="Share"
                />
                <span>Share</span>
              </button>
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/786/786407.png"
                  alt="Send"
                />
                <span>Send</span>
              </button>
            </SocialActions>
          </Description>
        </Article>
      </div>
    </Container>
  );
};

export default Main;
