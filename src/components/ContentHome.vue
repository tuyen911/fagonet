<template>
  <div>
    <div class="lazy">
      <section class="header-home-page">
        <div class="half">
          <h1 class="text">Cybersecurity Ecosystem</h1>
          <h2 class="text2">FAGONET</h2>
          <p class="text-gray">Fagonet is a cybersecurity company that provides cyber risk management and services on behalf of our valued technology and distribution partners.</p>
          <button class="get-started">Get started</button>
        </div>
        <!-- Add image here -->
        <div class="half">
          <img class="half-key m-auto w-4/5 Scale" src="https://fagonet.com/assets/Thumbsup-6f16196c.png" alt="intro-img-home">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
name: 'contenthome'
}
</script>

<style>
.header-home-page{
  display:flex;
  align-items: center;
  justify-content: space-between;
 margin: 0 146px;
}
.half{
  width:50%;
  text-align: start;
}
.text{
  color: #f5f5f5;
  font-size:52px;
  font-weight:700;
  line-height:93px;
  
}
.text2{
  margin: 16px 0;
  font-weight:700;
  line-height:93px;
  font-size:64px;
  background-image: linear-gradient(to bottom,#80ced7,#215a74);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gray{
  line-height:24px;
  --tw-text-opacity: 1;
    color: rgb(172 172 172/var(--tw-text-opacity));
}
.get-started{
  text-align: center;
  margin:48px 0 0;
  line-height:24px;
  box-shadow: rgba(204, 219, 220, 0.28) 0px 8px 24px;
  background: linear-gradient(180deg,rgba(255,255,255,.3) 0%,rgba(255,255,255,.1) 100%);
  border: 1px solid #80ced7;
  border-radius: 25px;
  font-weight:700;
  width:241px;
  height:61px;
}
.get-started:hover{
  background-color: #80ced7;
    color: #215a74;
}
@media (max-width: 1023px) {
  .half-key{
    width:307px;
    height:356px;
  }
  .get-started{
    margin: 0px 187px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 760px) {
  .text {
    text-align: center;
    font-size:32px;
    }
    .half{
      width:130%;
    }
    .text2 {
        text-align: center;
        font-size:32px;
    }
    .text-gray{
        text-align:start;
        height:76px;
        width:360px;
    }
    .half-key{
        width:165px;
        height:191px;
    }
    .header-home-page{
      display:block;
      margin:0;
    }
    .get-started{
      margin: auto;
    
    margin-top:22px;
    }
}
</style>