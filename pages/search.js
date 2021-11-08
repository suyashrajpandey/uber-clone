import tw from "tailwind-styled-components";
import React from "react";
import Link from "next/Link";

const Search = () => {
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      {/* Input Container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmLocation>Confirm Locations</ConfirmLocation>

      {/* Saved Places */}

      {/* Confirm Location */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen`;

const ButtonContainer = tw.div`
bg-white px-4`;

const BackButton = tw.img`
h-12`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2 `;

const FromToIcons = tw.div`
w-10 flex flex-col items-center 
`;

const Circle = tw.img`
h-2.5
`;

const Line = tw.img`
h-10
`;

const Square = tw.img`
h-3
`;

const InputBoxes = tw.div`
flex flex-col flex-1 
`;

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none mx-3
`;

const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full my-2 mr-2
`;

const ConfirmLocation = tw.div` 
flex items-center justify-center m-2 rounded-sm py-1 bg-black text-white
`;
