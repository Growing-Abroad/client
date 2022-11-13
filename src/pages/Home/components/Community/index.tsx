import TwoColorTitle from '@components/two-color-title';
import * as S from './styles';
import { socials } from '@/utils/socials';

function CommunitySection() {
  return (
    <S.Container>
      <TwoColorTitle
        text1="Join Our"
        text2="Community"
        hasSpaceBtw
      />
      <S.Socials>
        {socials.map(social => (
          <S.Social key={social.socialLink}>
            <a href={social.socialLink} target="_blank">
              <S.SocialImage src={social.source} alt={social.name} />
            </a>
            <S.SocialText>
              <p>+ {social.followNumber.toLocaleString('en').replace(/,/g, '.')}</p>
              <span>{social.followType + 's'}</span>
            </S.SocialText>
          </S.Social>
        ))}
      </S.Socials>
    </S.Container>
  );
}

export default CommunitySection