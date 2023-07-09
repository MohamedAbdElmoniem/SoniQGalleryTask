import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {GalleryImageModel} from '../../@types/GalleryImageModel';

const StyledGalleryImg = styled.Image`
  width: 160px;
  height: 180px;
  margin-horizontal: 20px;
  border-radius: 8px;
`;

type GalleryImgProps = {
  imageData: GalleryImageModel;
  onPress?: () => void;
};

const GalleryImg = ({imageData, onPress}: GalleryImgProps) => (
  <Pressable onPress={onPress}>
    <StyledGalleryImg source={{uri: imageData.download_url}} />
  </Pressable>
);

export default GalleryImg;
