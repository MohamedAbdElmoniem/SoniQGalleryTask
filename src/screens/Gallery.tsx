import React, {useEffect} from 'react';
import {useQuery} from 'react-query';
import {getGalleryImages} from '../services/ApiService/GalleryImagesAPIs';
import {AppView, GalleryList} from '../components';
import {StyleSheet, Text} from 'react-native';
import {useAppDispatch} from '../redux/hooks';
import {saveImages} from '../redux/Slices/GallerySlice';

export default function Gallery() {
  const dispatch = useAppDispatch();
  const {data, isSuccess} = useQuery({
    queryKey: 'galleryImages',
    queryFn: getGalleryImages,
  });

  useEffect(() => {
    data && isSuccess && dispatch(saveImages(data));
  }, [dispatch, data, isSuccess]);

  return (
    <AppView>
      <Text style={styles.title}>Gallery App</Text>
      <GalleryList />
    </AppView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
});
