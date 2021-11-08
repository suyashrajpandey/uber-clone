import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/Link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Suyash Pandey</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C4E03AQE8EyI5HPVtNA/profile-displayphoto-shrink_800_800/0/1575670759851?e=1642032000&v=beta&t=AnJ9kGIazcZdf7acKXceJkChvSTtTIv56NNProzOC4I" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen`;

const ActionItems = tw.div`
flex-1 p-4`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center`;

const Name = tw.div`
mr-4 w-auto text-sm`;

const UserImage = tw.img`
 h-12 w-12 rounded-full border border-gray-200 p-px`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex flex-col justify-center items-center flex-1 bg-gray-200 m-1 h-32 rounded-lg transform hover:scale-105 transition text-xl cursor-pointer`;

const ActionButtonImage = tw.img`
h-3/5`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex item-center mt-8 cursor-pointer
`;
