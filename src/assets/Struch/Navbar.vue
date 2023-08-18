<template>
  <nav class="navbar">
    <div class="container flex">
        <div class="navbar-logo flex">
        <img
            class="my-auto mr-2"
            src="data:image/png;base64,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"
            alt="logo"
        />
        <h1 class="text2">FAGONET</h1>
        </div>
        <!-- nav pc -->
        <div class="navbar-list show-nav">
            <nav class="nav">
                <ul class="nav-link flex">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/solutions">Solutions</router-link></li>
                <li><router-link to="/contactus">Conatct Us</router-link></li>
                </ul>
            </nav>

            <!-- <div class="custom-select-language ml-4">
                <div>
                    <img
                        class="w-[21px]"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKSSURBVHgBrVWLcdpAEJX4DjDMhApQB6GDyBXYqSCkAtwBSgUkFciuADoAVwCuQLgCkeHPAMp7mt3MRpZNxvbN3Ojudm8/b9+tHEdGkiSf1uv1jfNBw9XFfr+/Ph6PIyzvGo3Gd6u0Wq06+HSKxWKb+/P5/Fiv1yeu6y4uepCIY8wEM+TZdrv1N5vNWM6eTchDTO9Vw1SiMgwN5DtVA4g4Xi6XPvXiOGYAI5VBL5KMng8KRLHPvYlyaiOmc+j+VF048fCNmGlu5BJtJE66EslY5WIgNBkMMrLI6nMUmBqK0cV6kh4UCn3FXJVardYcnyc5X6BoXQTzTWW4M8G5r3BptL6k+eVwOCgkKb50Sh2sg0z6qZyGjIxZDtVuCZ4+c7Hb7R6r1WoaRalUCki9SqXSwwVSklkEoOEPSf8Ksiki1fQDrD1kfmMj7tNbdq3ssEW1w8in2bsppE7OIATI5LdsF4jm3sqZPuS3WPJBdYi3rUlq+HQ6aVHafFFcA5JQ0r/jHudDi7eB5isKOYGcTsjlmYXCE+B7Qv7Ypm/oF1kOG0h6pniDLF5j5aFiZQkvzImz/DayRFjkZTEeKQ/Bjl/Yz7Efq3Gk6uND3BfUY/TElfqAUpkQCN//LZa8nohreeKxGAhzoIlymlJobbo2JUTGNGd4KFeMEFzlnlHztbFNzjD5UjuMnBmAMYGcBU5Oy3WyhVIYeMYXxQ6nnU5eXl+ZgrPblyL/O/gX0VQv9dtMvx5q4Qmlm3eB1QUMxLQrR4Rgrn8MQOBhkreMmE0oqNVq9yJrQ+/JdV4ZdFAul31cvBZjHvEUR8R8BIMPznuH7YSXdEvOfwzyFR2Pxjzu2b/pBB3wodlsTpy3Di1Kzs+0/9KdP6ZLalkBf6u0AAAAAElFTkSuQmCC"
                        alt="earth-logo"
                    />
                    <h4 class="ml-2">EN</h4>
                    <button><i class="fa fa-caret-down ml-2 mb-[4px]"></i></button>
                    </div>
                <ul class="options-language">
                    <li class="relative flex justify-between items-center cursor-pointer">
                        <h5 class="w-1/4 mx-[12px]">EN</h5>
                        <h5 class="w-3/4 px-4 border-l border-l-white">English</h5>
                        <i class="fa fa-check absolute right-2 block"></i>
                    </li>
                    <li class="relative flex justify-between items-center cursor-pointer">
                        <h5 class="w-1/4 mx-[12px]">VI</h5>
                        <h5 class="w-3/4 px-4 border-l border-l-white">VietNam</h5>
                        <i class="fa fa-check absolute right-2 hidden"></i>
                    </li>
                </ul>
            </div> -->
        </div>
        <i class="fa fa-bars hidden text-xl cursor-pointer"></i>
    </div>
  </nav>
</template>

<script>
import Dropdow from "../../components/Dropdow.vue";

export default {
  name: "Navbar",
  components: {
    Dropdow,
  },
  data() {
    return {
      EN: [
        {
          title: "EN ENGLISH",
          link: "#",
        },
        {
          title: "VN VIETNAM",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.container{
    justify-content: space-between;
}
.navbar {
  justify-content: space-between;
  line-height: 24px;
  margin: 0 146px;
}
.navbar-logo {
  align-items: center;
}
.nav-link {
  list-style: none;
  position: relative;
}
.nav-link a {
  color: #fff;
  text-decoration: none;
  margin: 8px 20px;
  line-height: 24px;
  font-weight: 700;
}
.nav-link a:hover {
  background-image: linear-gradient(to bottom, #80ced7, #215a74);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar-list {
  display: flex;
  overflow:hidden;
}
.language {
  position: relative;
  margin-left: 1rem;
}
.custom-select-language>div{
display:flex;
height: 30px;
    margin-top: 50px;
}

.language > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px -27px;
}
.ml-2 {
  margin-left: 0.5rem;
}
.flex > img {
  height: 50px;
}
.fa.fa-bars {
    width:100px;
    height:100px;
    color:#fff;
    display:none;
}
@media (max-width: 1023px) {
    .fa.fa-bars{
        display:block !important ;
    }
    .navbar-list{
        /* display:none; */
    }
}
@media (max-width: 480px) {
    .container{
        display:flex;
    }
    .flex{
        display:block;
    }
    .text2{
        text-align: start;
       font-size:26px;
       line-height:39px;
    }
    .flex > img{
        max-width:80%;
        height:auto;
    }
}
    

</style>