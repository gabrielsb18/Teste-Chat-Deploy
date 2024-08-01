'use client';

import {
  AvatarContainer,
  Container,
  ProfileAvatar,
  RatingContainer,
  UserContainer,
} from './DashboardProfile.styled';

import Rating from '@/components/styled/Rating.styled';
import { useMainContext } from '@/hooks';

// import EmojiTransition from '../EmojiTransition';

function DashboardProfile() {
  const { user } = useMainContext();

  return (
    <Container>
      <AvatarContainer>
        <ProfileAvatar $fontSize="2.5em" $picture={user.picture} $width="3.75em">
          {user.name.charAt(0)}
        </ProfileAvatar>
        <UserContainer>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </UserContainer>
      </AvatarContainer>
      <RatingContainer title="Média das avaliações">
        <span>
          <b>4.5</b> / 5
        </span>
        <Rating $rating={4.5} />
        {/* <EmojiTransition rating={5}/> */}
      </RatingContainer>
    </Container>
  );
}

export default DashboardProfile;
