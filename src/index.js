import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fruits from './fruits';
import Card from './card';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fruits/>
    <div className='wrapper'>
      <Card
      title='banana'
      src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614572725_23-p-banan-na-belom-fone-24.jpg'/>
      <Card
      title='apple'
      src='https://avatars.mds.yandex.net/i?id=908f4f0d87b8f3c9f426f124444c88816fea9aee-10126215-images-thumbs&n=13'/>
      <Card
      title='grapes'
      src='https://avatars.mds.yandex.net/i?id=f827c2cc9993a5a044d6db3e8fd5264dbe342645-9196574-images-thumbs&n=13'/>
      <Card
      title='apricot'
      src='https://avatars.mds.yandex.net/i?id=a1ad7d6627e07baf31119ad08c0ef656a06e9ab0-9221446-images-thumbs&n=13'/>
      <Card
      title='pear'
      src='https://avatars.mds.yandex.net/i?id=3409c36e71584aff8e48c0c2c4b911162461f936-5876069-images-thumbs&n=13'/>
      <Card
      title='cherry'
      src='https://avatars.mds.yandex.net/i?id=3dd9ba6b7c54bd40142997cb40fad2e80289780d-10348710-images-thumbs&n=13'/>
      <Card
      title='lemon'
      src='https://avatars.mds.yandex.net/i?id=224209ee20868848c595a5628ed71d873c655d52-8544486-images-thumbs&n=13'/>
      <Card
      title='mango'
      src='https://avatars.mds.yandex.net/i?id=a36e29d809c8935e0ec76b8d55cb62789dd9c6b9-4714431-images-thumbs&n=13'/>
      <Card
      title='kiwi'
      src='https://avatars.mds.yandex.net/i?id=8e47d59e39908291e8247b742f21e8d4acd67499-9221377-images-thumbs&n=13'/>
      <Card
      title='melon'
      src='https://avatars.mds.yandex.net/i?id=e144f2adbb2b2d28cb8b511658eba608adbfa2bd-10696775-images-thumbs&n=13'/>
      <Card
      title='watermelon'
      src='https://avatars.mds.yandex.net/i?id=0ced89bd7bee47850f546add4f7f85b7b0c14078-9709143-images-thumbs&n=13'/>
      <Card
      title='pineaplle'
      src='https://avatars.mds.yandex.net/i?id=eb8e3b02fb0cd1205412223c998d9e4a74835df7-9217411-images-thumbs&n=13'/>
      <Card
      title='fig'
      src='https://avatars.mds.yandex.net/i?id=936dc699c8afbd0e68781c91f86963841ad0cca9-10351804-images-thumbs&n=13'/>
      <Card
      title='coconut'
      src='https://avatars.mds.yandex.net/i?id=eab4891bb2f2a06dcb7cb93e29b5f72565afef37-9068854-images-thumbs&n=13'/>
      <Card
      title='pomegranate'
      src='https://avatars.mds.yandex.net/i?id=92da6b4451fcf65cb91701a838d6769c72c100ce-8710123-images-thumbs&n=13'/>
      <Card
      title='strawberry'
      src='https://avatars.mds.yandex.net/i?id=53d3d5de2776381636c4bce1f9c83ef542e9f987-9150989-images-thumbs&n=13'/>
      <Card
      title='papaya'
      src='https://avatars.mds.yandex.net/i?id=38fcac340d00aae5935ac7e7aa2f210f311f05f9-10677603-images-thumbs&n=13'
      />
      <Card
      title='plum'
      src='https://avatars.mds.yandex.net/i?id=4b025138e565fc77d831b0f4e2e5f5844b4f95da-8449287-images-thumbs&n=13'/>
      <Card
      title='nut'
      src='https://avatars.mds.yandex.net/i?id=c6b096dbf4912b7551e0b6de164dc7c703f0d7e3-5298558-images-thumbs&n=13'
      />
      <Card
      title='oranges'
      src='https://avatars.mds.yandex.net/i?id=e2304b060d9b63390b87f79c10a16cff95c5906a-8497449-images-thumbs&n=13'/>
    </div>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
