<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Damian M. Buzink</strong>, an software developer and aspiring game developer.
      <br />
      <br />From as young as I can remember I have been playing games. Before even getting to high school I realized I wanted to become a software or game developer. 
      However, I did not understand what that truly entails at the time. During high school I became more and more interested in technology. 
      This was primarily through the Linus Tech Tips youtube channel.
      <br />
      <br /> As a result of this I decided to study software development as to approach game development with strong technical skills.
      Towards the end of the bachelor I was happy with the practical skills I obtained, but I wanted more theoretical knowledge. 
      Thus I went on to do a computer science and engineering master, where I primarily focused on algorithms.
      <br />
      <br /> Currently, I am residing in Eindhoven, The Netherlands.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV_Damian_M_Buzink.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Damian M. Buzink" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>IT Consultant - Info Support - Ecofed</h3>
      <h4>08 2024 - present | Veenendaal, The Netherlands</h4>

      <div class="tech-stack">Worked on developing multiple proof of concept and MVPs</div>
      <div class="tech-stack">.NET APIs and Blazor Front-ends</div>

      <h3>Software developer internship - Asamco B.V.</h3>
      <h4>02 2021 - 08 2021 | Breda, The Netherlands</h4>

      <div class="tech-stack">Developed a new version of their Loan Management System. Consisting of a new SDK with </div>
      <div class="tech-stack">core functionality, a website and a web API with the SDK functionality.</div>

      <h3>Software developer internship - CM.com</h3>
      <h4>08 2019 - 01 2020 | Breda, The Netherlands</h4>

      <div class="tech-stack">Developed a product generic invoice system.</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Game engines</h3>
        <SkillRate name="Unity" />
        <SkillRate name="Unreal Engine"/>
      </div>

      <div class="skill-set">
        <h3>Programming languages</h3>
        <SkillRate name="C#"/>
        <SkillRate name="C++" />
        <SkillRate name="Python" />
        <SkillRate name="Javascript/Typescript" />
        <SkillRate name="Java" />
        <SkillRate name="Scala" />
      </div>

      <div class="skill-set">
        <h3>Miscellaneous</h3>
        <SkillRate name="Software design" />
        <SkillRate name="Full stack development" />
        <SkillRate name="Algorithm expertise" />
        <SkillRate name="Teamwork" />
        <SkillRate name="Detail-oriented" />
        <SkillRate name="Leadership" />
        <SkillRate name="Documentation" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Master Computer Science and Engineering | Eindhoven University of Technology</h3>
      <h4>09 2021 - 08 2023 / Eindhoven, The Netherlands</h4>
      <ul>
        <li>Thesis: The effect of area preservation on polygon simplification  <a href="d/Master_thesis_Damian_M_Buzink.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>Download</a></li>
        <li>Focus: Algorithms</li>
      </ul>
      

      <h3>Bachelor Software Development | Avans University of Applied Sciences</h3>
      <h4>09 2021 - 08 2023 / Breda, The Netherlands</h4>
      <ul>
        <li>Minor: <a href="https://www.tue.nl/en/education/graduate-school/pre-master/hbo-top-minor">HBO-TOP Minor Computer science and Engineering</a> (special pre-master program for high performing HBO students)</li>
      </ul>


      <h2>Languages</h2>

      <h3>Dutch</h3>
      <div>Native</div>

      <h3>English</h3>
      <div>Fluent</div>


      <h2>Some personal info</h2>
      <h3>Hobbies</h3>
      <ul>
        <li>Working on hobby software projects</li>
        <li>Working on hobby game projects</li>
        <li>Playing video games</li>
        <li>Watching video game analyses</li>
        <li>Reading</li>
        <li>Learning</li>
        <li>Tennis</li>
        <li>Playing piano (I am still a beginner)</li>
      </ul>
      
      <h3>Favorite games</h3>
      <ul>
        <li>Persona 3</li>
        <li>Assassin's Creed 2</li>
        <li>Zero Escape: Virtue's Last Reward</li>
        <li>God of War (2018)</li>
        <li>Baldur's Gate 3</li>
        <li>Astral Chain</li>
        <li>13 Sentinels</li>
        <li>Disco Elysium</li>
        <li>Fire Emblem: Three Houses</li>
        <li>Ghost of Tsushima</li>
      </ul>

      <h3>Favorite books</h3>
      <ul>
        <li>Meditations - Marcus Aurelius</li>
        <li>Stormlight Archive Series - Brandon Sanderson </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>