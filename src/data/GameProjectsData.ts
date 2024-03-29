import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "The Heiress on Ice", "img/projects/THOI_icon.png", 
    `
    <div class="paragraph">
     <strong>The Heiress on Ice</strong> is a game demo / prototype created in Unreal Engine 5.
     <br /> In this game you play as a figure skater, where you are able to do more damage the faster you go. 
     Since turning slows you down, you want to find a path through the enemies that does not require turning.
     To enable you to do this, after attacking, which gives you a boost, you are able to eject in different directions.
     But beyond that there is still more to master. Such as attack timing which rewards you with higher damage for a great timing 
     or punishes you for bad timing with a decreased amount of damage.
     You are also able to parry bullets and get a small speed boost for executing it successfully.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/jDzf1-poHYs" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        The Windows build can be downloaded at itch.io <a href="https://gamtheus.itch.io/the-heiress-on-ice-demo" target="_blank">here</a>.
        </div>
    </div>

    
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/thoi/THOI-1.png" alt="THOI Screenshot 1" />
    <img class="pc-screenshot" src="img/projects/thoi/THOI-2.png" alt="THOI Screenshot 2" />
    <img class="pc-screenshot" src="img/projects/thoi/THOI-3.png" alt="THOI Screenshot 3" />
    <img class="pc-screenshot" src="img/projects/thoi/THOI-4.png" alt="THOI Screenshot 4" />
    <img class="pc-screenshot" src="img/projects/thoi/THOI-5.png" alt="THOI Screenshot 5" />
    </div>
    `, "#23bd69", false),
    new ProjectData("project-2", "Aigez Brain Trainer", "img/projects/aigezbraintrainer-screenshot.png", `
    <div class="paragraph">
        <strong>Aigez Brain Trainer</strong> is a serious game developed as a school assignment as part of a team, which I lead. 
        It was created in Unity and is only available in dutch.
        <br /> It consists of six different minigames and has a visual novel-style story. The minigames are:
        <ul>
            <li>Memory</li>
            <li>Raad het liedje (Guess the song)</li>
            <li>Zoek de verschillen (Find the differences)</li>
            <li>Schipper mag ik overvaren (Skipper, may I sail across)</li>
            <li>Flitsen (Flashing)</li>
            <li>Legpuzzel (Jigsaw puzzle) </li>
        <ul/>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/tgERdaOfT1s" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    <div class="notice">
        WebGL build available on <a href="https://gamtheus.itch.io/aigez-brain-trainer" target="_blank">itch.io</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-1.png" alt="Aigez Brain Trainer Screenshot 1" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-2.png" alt="Aigez Brain Trainer Screenshot 2" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-3.png" alt="Aigez Brain Trainer Screenshot 3" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-4.png" alt="Aigez Brain Trainer Screenshot 4" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-5.png" alt="Aigez Brain Trainer Screenshot 5" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-6.png" alt="Aigez Brain Trainer Screenshot 6" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-7.png" alt="Aigez Brain Trainer Screenshot 7" />
    <img class="pc-screenshot" src="img/projects/aigezbraintrainer/aigez-8.png" alt="Aigez Brain Trainer Screenshot 8" />
    </div>
    `, "#5a78af", false),
    new ProjectData("project-3", "Secure Thievery", "img/projects/securethievery/st-2.png", `
    <div class="paragraph">
        <strong>Secure Thievery</strong> is a game made in Unity for a school assignment with two fellow students.
        More specifically this was for the course Geometric Algorithms.
        In this game you play as a thief, who works at a security company. 
        You have to decide the camera placement for a museum based on the floor plans.
        However you want to steal from the museum, therefore you make sure to still leave a path from the entrance to the desired item.
        To prevent it from looking suspicious you need to make sure that 80% of the floor is still covered by the cameras. 
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/R9mvUffhU80" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        The Windows build can be downloaded at itch.io <a href="https://gamtheus.itch.io/secure-thievery" target="_blank">here</a>.
        </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/securethievery/st-1.png" alt="Secure Thievery Screenshot 1" />
    <img class="pc-screenshot" src="img/projects/securethievery/st-2.png" alt="Secure Thievery Screenshot 2" />
    <img class="pc-screenshot" src="img/projects/securethievery/st-3.png" alt="Secure Thievery Screenshot 3" />
    </div>
    `, "#ada11c", false),
];