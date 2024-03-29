import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "BlackDragonAI", "img/projects/nongameprojects/BDAI.png", `
    <div class="paragraph">
      The <strong>BlackDragonAI</strong> is a Twitch chat bot I created for a friend who used to do livestreams. When it was used it was deployed on a Raspberry Pi in Docker containers. It consists of:
      <ul>
        <li>A .NET console application which handles the bot logic, such as command messages, counters and timed messages</li>
        <li>A .NET web API to process commands and other relevant information and store them in the database</li>
        <li>A MySql database to store the information</li>
        <li>A .NET Blazor application for the website to easily add, change or delete commands</li>
      </ul>

      It also includes some Discord integration for the stream planning that was shared in his Discord server that can be loaded into the website. 
      You can also add or change planned streams here and update the planning in the Discord server.
      <br /> It at one point in time also included Spotify support, but it ended up deprecated.

      <br />
      <br />To learn more about features of the bot or if you are interested in the source code, you can go to the github repository <a href="https://github.com/dmbuzink/BlackDragonAI" target="_blank">here</a>.
      The source code of the web API can be <a href="https://github.com/dmbuzink/BlackDragonAI_API" target="_blank">here</a> and for the website <a href="https://github.com/dmbuzink/BlackDragonAI_Manager" target="_blank">here</a>.
      
      <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/nongameprojects/BDAI_1.png" alt="BlackDragon AI commands" />
        <img class="pc-screenshot" src="img/projects/nongameprojects/BDAI_2.png" alt="BlackDragon AI stream planning" />
      </div>
    `, "#999999"),
    new ProjectData("project-8", "The Circle", "img/projects/nongameprojects/the-circle.jpg", `
    <div class="paragraph">
                As a school assignment I created with a team of fellow students a live streaming platform based on the book The Circle by Dave Eggers.
                The team, which I lead, consisted of:
                <ul>
                    <li>An Angular application for the website which supported watching up to 4 streams at the same including chats</li>
                    <li>A Node.js web api to access the data such as user information and streamkeys as well as provide the chat functionality</li>
                    <li>A MongoDB database to store the data</li>
                    <li>A NGINX server for video streaming</li>
                    <li>An Android app from which you can stream and see the chat</li>
                </ul>
                There were some additional requirements such a getting points for watching streams and some special security requirement. 
                More specifically, the CIA triad's I (integrity) and A (availability) needed to be ensured for the project, the C (confidentiality) was not allowed (as in line with the book the assignment was based on).
            </div>`, "#bda613", true),
    new ProjectData("project-7", "Loan Management System 3", "img/projects/nongameprojects/LMS_logo.png", `
    <div class="paragraph">
                The <strong>Loan Management System 3</strong> was created at Asamco B.V. as part of an internship. I was tasked with creating a new version of their Loan Management System. It consists of:
                <ul>
                    <li>A .NET SDK containing most of the core functionality</li>
                    <li>A .NET web API making the functionality and data available to the website</li>
                    <li>SQL Server database to store the data as well as containing logic such as interest calculations</li>
                    <li>An Angular front-end, such that the user can easily use the system</li>
                </ul>

                There were some interesting aspects to this project. 
                One of those was the fact that this was not going to be the final product as it would be further developed with many more features.
                Therefore it was important that the code was clean, such that it was easily for the developers to do just that.
                It also needed to be easy to use as it would be distributed to customers, if they so desired, for easy automation of their processes.
                Another interesting aspect was that there already was a previous version that also needed to be supported in this new version. 
                This was an interesting challenge as the different versions could easily result in a messy codebase.
                I therefore needed to be smart about the design of the system to keep the codebase clean, which I successfully did.
            </div>`, "#1ca1e2"),
    new ProjectData("project-9", "Product Generic Invoice System", "img/projects/nongameprojects/CM_logo.svg", `
    <div class="paragraph">
                As part of an intership at CM.com I created a prototype for a <strong>product generic invoice systems</strong>. 
                CM.com has a lot of different services such as texting, emailing and payment services, but at the time of the intership these products were invoiced seperately.
                I was reponsible for creating a prototype that could invoice all products into one invoice. The prototype consisted of:
                <ul>
                    <li>A .NET web API to process the details of the usage of a service by a customer</li>
                    <li>A database to store the details of the usage</li>
                    <li>A .NET service that groups the usage of a customer for invoicing and pushes the data, when the time is right, on the queue</li>
                    <li>A RabbitMQ queue for the collection of usage data</li>
                    <li>A .NET application that takes the collection of usage data for a customer, prepares it for invoicing and sends it to the financing api that handles the creation of the document et cetera.</li>
                </ul>
            </div>`, "#0400ff"),
        new ProjectData("project-10", "EFAL", "img/projects/nongameprojects/dfa_example.png", `
    <div class="paragraph">
                <strong>Extended Finite Automaton Language</strong> (EFAL) is a language to describe and test automatons, 
                specifically Deterministic and Non-deterministic Finite Automatons extended with variables and guards. 
                These guards and variables allow conditional state transitions to be defined based upon variables. 
                These variables can also be reassigned within the automaton. 
                After describing an automaton, an user can test some text on the automaton, to see if the automaton accepts the text.
                This DSL was written in Rascal and compiles to Java.
        <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/nongameprojects/EFAL_DEMO_A.png" alt="EFAL example" />
                <img class="pc-screenshot" src="img/projects/nongameprojects/EFAL_COMPILED.png" alt="EFAL compiled example" />
                <img class="pc-screenshot" src="img/projects/nongameprojects/some_var.png" alt="EFAL variable and condition example" />
                <img class="pc-screenshot" src="img/projects/nongameprojects/efal_compiled_cli.png" alt="EFAL compiled CLI example" />
        </div>

        </br> The source code for the DFA variant can be found <a href="https://github.com/dmbuzink/DSLD-assignment3">here</a> and 
        the variant that also supports NFAs <a href="https://github.com/dmbuzink/DSLD-assignment3/tree/feature/nfa-support">here</a>.
            </div>`, "#0400ff"),
];  