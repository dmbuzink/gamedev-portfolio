<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Damian M. Buzink</strong>, an aspiring game developer.<br/>
        Ever since I was young I wanted to become a game developer. I went on to do a software development bachelor and computer science and engineering master. During these studies I learned about game development.      </div>

      <div style="margin-top: 20px;">I've worked on these <router-link to="/game-projects">games / game prototypes</router-link> and on these <router-link to="/other-projects">non-game projects</router-link></div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a gameplay programmer or similar. You can reach me at <a href="mailto:dbuzink@gmail.com">dbuzink@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img width="300" height="480" src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
    margin-top: 0px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

@media only screen and (min-width: 1310px){
    .photo {
        margin-top: -100px;
    }
}

</style>