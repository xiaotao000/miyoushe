<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background: url(@/image/下载.png) no-repeat 0 62px;
  background-size: 100%;
}
.toal {
  width: 700px;
  height: 100%;
  margin: 28px 0 40px 173px;
  overflow: hidden;
}
.code {
  position: absolute;
  top: 89px;
  right: 174px;
  width: 280px;
  height: 100%;
}
.filter-first {
  width: 100%;
  height: 120px;
  padding: 12px 30px;
  border-bottom: 1px solid #ebebeb;
}
.sem {
  padding: 20px 14px;
  display: flex;
  align-items: center;
  height: 120px;
}
.myh {
  width: 100px;
  height: 100px;
  margin-right: 8px;
  position: relative;
  background-color: #f5f5f5;
  flex-shrink: 0;
}
.myh img {
  width: 100%;
  height: 100%;
}
.first {
  padding: 19px 0;
  font-weight: 600px;
}
.first span {
  color: #00c3ff;
  font-size: 14px;
  border-radius: 2px;
  text-align: center;
  line-height: 18px;
  padding: 0 4px;
  border: 1px solid #00c3ff;
}
.first a {
  color: #333;
  font-size: 15px;
}
.second {
  width: 640px;
  height: 251px;
  border-bottom: 1px solid #ebebeb;
  padding: 24px 30px;
}
.img1 {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}
.img2 {
  margin: 6px;
  vertical-align: middle;
  height: 12px;
}
.span {
  color: #666;
  font-size: 10px;
  margin-left: 10px;
}
.p {
  color: #ccc;
  margin-left: 7px;
  font-size: 10px;
}
.zore {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
  margin: 15px 0 7px 0;
}
.thor {
  line-height: 18px;
  margin-top: 8px;
  color: #999;
  font-size: 14px;
}
.img3 {
  margin-top: 10px;
  width: 370px;
  height: 120px;
  position: relative;
}

.img3 .cobo {
  width: 120px;
  height: 100%;
  border-radius: 6px;
  background-image: url(@/image/pubimg/命令板.jpg);
  background-position: 17%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.eight {
  width: 120px;
  height: 100%;
  border-radius: 6px;
  background-image: url(@/image/pubimg/八重神子1.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 125px;
}
.fold {
  width: 120px;
  height: 100%;
  border-radius: 6px;
  background-image: url(@/image/pubimg/八重神子2.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
.page {
  height: 24px;
  margin-top: 5px;
}
.qrcode-titil {
  font-size: 16px;
  color: #00c3ff;
}
.qrcode-suder {
  font-size: 16px;
  margin-top: 8px;
  color: #999;
}
.side {
  margin-top: 20px;
  border-radius: 4px;
  height: 396px;
}
.side-uster {
  font-size: 15px;
  align-items: center;
  display: flex;
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  padding: 0 20px;
}
.side-uster h2 {
  flex-grow: 1;
  font-size: 16px;
  font-weight: 600;
}
.side-uster a {
  flex-shrink: 0;
  color: #999;
}
.side-body {
  padding: 20px;
}
.body-op {
  width: 240px;
  height: 136px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background-image: url(@/image/pubimg/米游币.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.body-list {
  position: absolute;
  bottom: 236px;
  left: 20px;
  width: 220px;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  border-radius: 0 0 3px 3px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
.body-topic {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}
.topic-card {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ebebeb;
}
.topic-card img{
  width: 100%;
    height: 100%;
    border-radius: 8px;
}
.card-info{
  margin-left: 10px;
}
.card-info p{
  line-height: 20px;
    margin: 0;
    font-weight: normal;
    font-size: 14px;
}
.list-banner {
  padding-bottom: 10px;
}
.banner-info {
  width: 240px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #333;
}
.banner-info span {
  display: inline-block;
  width: 32px;
  height: 16px;
  background-color: #c3ccd9;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  text-align: center;
  line-height: 16px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.banner-info p {
  font-size: 14px;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
