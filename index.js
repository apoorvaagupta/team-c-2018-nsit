$(document).ready(function () {

  const mainWrapper = $('#main-wrapper');

  $('#homeButton').click(function () {
    console.log(1);
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white; border: solid 1px black; ">
                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Overview</h1>

                        <div class="overview-description" style="text-align: center;">
                            &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="background-color: white; color: black; font-size: 14pt;">Welcome to the &nbsp;</span><br><b
                                style="background-color: white; color: black; font-size: 14pt;"><span
                                style="color: #385623; font-size: 15pt;">2018 International Conference <br> Towards Extensible and Adaptable Methods in Computing (TEAMC 2018) </span></b>
                            <b style="background-color: white; color: black; font-size: 14pt;"></b><span
                                style="background-color: white; color: black; font-size: 14pt;">&nbsp; <br> organized by&nbsp;</span>
                        </div>


                        <div style="background: white; line-height: 18pt; margin: 0in; text-align: center;">
                            <div style="text-align: center;">
                                </div>
                            <div style="text-align: center;">
                                <b><span style="color: #002060; font-size: 15pt;">Netaji Subhas Institute of Technology, Dwarka, Delhi, India.</span></b>
                            </div>
                        </div>


                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            The International Conference, Towards Extensible and Adaptable Methods in Computing – TEAMC 2018, will be held during 26-28 March, 2018 under the aegis of Netaji Subhas Institute of Technology (NSIT), New Delhi.<br/><br/>
Extensible and adaptable computing refers to the array of methods and techniques that systematically tackle the future growth of systems and respond proactively and seamlessly to change. This conference will provide an excellent opportunity to researchers, practitioners and students to share ideas, discuss best practices and collaborate together to solve problems in convergent domains of computing that strive towards extensibility and adaptability.
    <br/><br/>
                                TEAMC 2018 includes the following tracks:
                            </span>
                        </div>
                        <br/>
                        <div class="home-list">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Agile Software Development
                                </li>
                                <li class="list-group-item">
                                    Data Management
                                </li>
                                <li class="list-group-item">
                                    Web Intelligence
                                </li>
                                <li class="list-group-item">
                                    Computing for Education
                                </li>
                                <li class="list-group-item">
                                    Machine Learning
                                </li>
                            </ul>
                        </div>

                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            The conference will feature regular technical sessions, keynote speeches, workshops, panel discussions and a design contest.
                            </span>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <div id="carouselExampleIndicators" style="width: 100%;" class="carousel slide" data-ride="carousel" data-interval="2000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block img-fluid" src="./images/5.jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/_MG_9209.JPG" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/_MG_9377.JPG" alt="Third slide">
                                </div>

                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC06193.JPG" alt="Fourth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_0408.jpg" alt="Fifth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_0441.jpg" alt="Sixth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_6735.jpg" alt="Seventh slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/IMG_20150826_222421.jpg" alt="Eighth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/india%20gate%20with%20chatri.jpg" alt="Ninth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/indiagate.jpg" alt="Tenth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/jantar%20mantar.png" alt="Eleventh slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/lotus%20temple%20.jpg" alt="Twelveth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/qutub%20minar%20slice%20of%20history.jpg" alt="Thirteen slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/qutub%20minar%202.png" alt="Fourteenth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/surajkundm_mela2.jpg" alt="Fifteenth slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`);
  });

  $('#copButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`            <div style="background-color: white;width: 100%; border: solid 1px black; ">

                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        Call For Papers</h1>

                    <span>We invite authors to submit their papers under the tracks given below. Each track includes several topics listed below,  but is not necessarily limited to them.
                        <br><br></span>
                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#track1">TRACK 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track2">TRACK 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track3">TRACK 3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track4">TRACK 4</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track5">TRACK 5</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="track1" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#555;"> Agile Software Development</h3>
                                    <div>
                                        <p style="color: #666">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #666">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Agile software processes and methodologies
                                            </li>
                                            <li class="list-group-item
">Agile approaches to requirements engineering
                                            </li>
                                            <li class="list-group-item
">Testing in agile environment
                                            </li>
                                            <li class="list-group-item
">Agile project management
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for web development
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for developing embedded software
                                            </li>
                                            <li class="list-group-item
">Design and architectural patterns
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track2" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#555;"> Agile Software Development</h3>
                                    <div>
                                        <p style="color: #666">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #666">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Agile software processes and methodologies
                                            </li>
                                            <li class="list-group-item">Agile approaches to requirements engineering
                                            </li>
                                            <li class="list-group-item">Testing in agile environment
                                            </li>
                                            <li class="list-group-item">Agile project management
                                            </li>
                                            <li class="list-group-item">Agile methodologies for web development
                                            </li>
                                            <li class="list-group-item">Agile methodologies for developing embedded software
                                            </li>
                                            <li class="list-group-item">Design and architectural patterns
                                            </li>
                                            <li class="list-group-item">Aspect oriented programming
                                            </li>
                                            <li class="list-group-item">Agile model driven design
                                            </li>
                                            <li class="list-group-item">Agile practices for component based software development
                                            </li>
                                            <li class="list-group-item">Tools and techniques for agile development
                                            </li>
                                            <li class="list-group-item">Risk assessment in agile environment
                                            </li>
                                            <li class="list-group-item">Estimation in agile software development
                                            </li>
                                            <li class="list-group-item">Adopting agile and lean practices in large projects
                                            </li>
                                            <li class="list-group-item">Software metrics for agile projects, agile processes, agile teams
                                            </li>
                                            <li class="list-group-item">Agile methods in education, pedagogy and research
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track3" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#555;"> Agile Software Development</h3>
                                    <div>
                                        <p style="color: #666">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #666">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Agile software processes and methodologies
                                            </li>
                                            <li class="list-group-item
">Agile approaches to requirements engineering
                                            </li>
                                            <li class="list-group-item
">Testing in agile environment
                                            </li>
                                            <li class="list-group-item
">Agile project management
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for web development
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for developing embedded software
                                            </li>
                                            <li class="list-group-item
">Design and architectural patterns
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track4" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#555;"> Agile Software Development</h3>
                                    <div>
                                        <p style="color: #666">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #666">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Agile software processes and methodologies
                                            </li>
                                            <li class="list-group-item
">Agile approaches to requirements engineering
                                            </li>
                                            <li class="list-group-item
">Testing in agile environment
                                            </li>
                                            <li class="list-group-item
">Agile project management
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for web development
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for developing embedded software
                                            </li>
                                            <li class="list-group-item
">Design and architectural patterns
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track5" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#555;"> Agile Software Development</h3>
                                    <div>
                                        <p style="color: #666">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #666">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Agile software processes and methodologies
                                            </li>
                                            <li class="list-group-item
">Agile approaches to requirements engineering
                                            </li>
                                            <li class="list-group-item
">Testing in agile environment
                                            </li>
                                            <li class="list-group-item
">Agile project management
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for web development
                                            </li>
                                            <li class="list-group-item
">Agile methodologies for developing embedded software
                                            </li>
                                            <li class="list-group-item
">Design and architectural patterns
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
`);
  });

  $('#subButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`
    <div style="background-color: white; border: solid 1px black; ">
                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        Submission</h1>

                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active nav-style a-style pl-0 pr-0" data-toggle="tab"
                                   href="#submissionMethodTab">SUBMISSION METHOD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#academicEthicsTab">ACADEMIC
                                    ETHICS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#registrationRequirementTab">REGISTRATION
                                    REQUIREMENT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#awardsTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    AWARDS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#publishingTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    PUBLISHING</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="submissionMethodTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            We welcome full-length paper submissions of maximum 12 pages in the CCIS one-column page format. Short papers of at most 8 pages will also be considered. Submissions should strictly adhere to the <a
                                                href="http://www.springer.com/series/7899"> Springer Communications in Computer and Information Science (CCIS)</a> format. Submissions will be accepted through <a
                                                href="https://ocs.springer.com/ocs/"> Springer Online Conference Service (OCS).</a>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="academicEthicsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Please do not submit work that has been already published or accepted for publication or is currently under review for other conferences or journals. All manuscripts submitted to TEAMC 2018 will be subjected to plagiarism detection software to ensure originality. Qualifying papers will undergo a double blind review process by at least three reviewers. Please ensure that your manuscript clearly brings forth the innovative ideas in it, the results obtained and relevance of the contribution. Accepted papers must be presented at the conference.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="registrationRequirementTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            At least one of the authors of each accepted paper must register by paying the full registration fee as applicable for the author, on or before the deadline for camera ready submission.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="awardsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Best paper award will be presented to high quality papers.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="publishingTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Publishing
We are in active engagement with Springer India for publishing accepted papers of the conference in the CCIS book series, subject to approval by CCIS Board. The publication will be indexed by ISI Proceedings, Ei – Compendex,  DBLP,  SCOPUS, Google Scholar and Springer link.
We are also contacting other publishers for journal publications and will share emerging developments on this website.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`);
  });

  $('#regButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`            <div style="background-color: white; border: solid 1px black; ">
                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        REGISTRATION</h1>

                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active nav-style a-style pl-0 pr-0" data-toggle="tab"
                                   href="#onlineRegistrationTab">ONLINE REGISTRATION</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#visaSupportTab">VISA SUPPORT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#registrationRequirementTab">REGISTRATION
                                    REQUIREMENT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#awardsTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    AWARDS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#publishingTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    PUBLISHING</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="onlineRegistrationTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            We welcome full-length paper submissions of maximum 12 pages in the CCIS one-column page format. Short papers of at most 8 pages will also be considered. Submissions should strictly adhere to the <a
                                                href="http://www.springer.com/series/7899"> Springer Communications in Computer and Information Science (CCIS)</a> format. Submissions will be accepted through <a
                                                href="https://ocs.springer.com/ocs/"> Springer Online Conference Service (OCS).</a>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="visaSupportTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Please do not submit work that has been already published or accepted for publication or is currently under review for other conferences or journals. All manuscripts submitted to TEAMC 2018 will be subjected to plagiarism detection software to ensure originality. Qualifying papers will undergo a double blind review process by at least three reviewers. Please ensure that your manuscript clearly brings forth the innovative ideas in it, the results obtained and relevance of the contribution. Accepted papers must be presented at the conference.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="registrationRequirementTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            At least one of the authors of each accepted paper must register by paying the full registration fee as applicable for the author, on or before the deadline for camera ready submission.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="awardsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Best paper award will be presented to high quality papers.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="publishingTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Publishing
We are in active engagement with Springer India for publishing accepted papers of the conference in the CCIS book series, subject to approval by CCIS Board. The publication will be indexed by ISI Proceedings, Ei – Compendex,  DBLP,  SCOPUS, Google Scholar and Springer link.
We are also contacting other publishers for journal publications and will share emerging developments on this website.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

`);
  });

  $('#programButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`
    <div style="background-color: white; border: solid 1px black; ">
                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        PROGRAM</h1>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
                            Program Will Be Announced Soon
                        </span>
                    </div>
                </div>
            </div>
`);
  });

  $('#committeeButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append();
  });

  $('#sponsorButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`
                <div style="background-color: white; border: solid 1px black; ">
                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        SPONSORSHIP</h1>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
                            Dear Technology Leader, <br/><br/>
In the ongoing saga of the digital revolution, the new mantra - Extend and Adapt,  has produced ripples of excitement in the industry and academia! Indeed, there is a fresh lease of energy enthusing technology drivers as they take every possible step to equip more and more people with the technological means to take new initiatives and learn continuously, to reach out and connect, and to realize their full potential at all times. And thereby, stands the fresh challenge for today - build applications and systems that recognize this core element of change - in requirements, data, surrounding context and user preferences; and adapt to the change gracefully, seamlessly.<br/><br/>
The International Conference Towards Extensible and Adaptable Methods in Computing -TEAMC-2018, aims to bring together professionals and students from all parts of the globe on a common platform to address different aspects of this very challenge of creating extensible and adaptable systems and applications:<br/><br/>

                        </span>
                    </div>

                    <ul class="sponsorshipList">
                        <li>There is an ever-exploding nebula of data in the cyberspace that must crystallize into
                            meaningful compendiums of knowledge backing myriad applications.
                        </li>
                        <li>
                            Software development processes must be flexible enough to adapt quickly to the changing
                            expectations and scales of businesses.
                        </li>
                        <li>
                            Applications such as e-learning must offer personalized features and adapt to the changing
                            preferences and capabilities of users.
                        </li>
                        <li>
                            The web, rife with textual and multimedia content, must be harnessed to gather cogent
                            information.
                        </li>
                        <li>
                            Indeed, the world of computing must evolve and learn to sync with human intelligence.
                        </li>
                    </ul>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
                            TEAMC-2018 will be hosted by Netaji Subhas Institute of Technology, a premier seat of higher learning in technology that attracts the best students to pursue its UG, PG and Doctoral programs. It is spread over a beautifully landscaped campus of 145 acres that houses all facilities to create an excellent academic environment. The committee of professionals dedicated towards the conference is striving to achieve a high quality technical program with Tracks on <b>Data management, Agile software development, Web intelligence, Computing in education, and Machine learning.</b> It will feature the following components:
                        <br/><br/>
                        </span>
                    </div>

                    <ul class="sponsorshipList">
                        <li>
                            Regular Technical Sessions
                        </li>
                        <li>
                            Keynote speeches
                        </li>
                        <li>
                            Workshops
                        </li>
                        <li>
                            Panel discussions
                        </li>
                        <li>
                            Design contest
                        </li>
                        <li>
                            Exhibits
                        </li>
                    </ul>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
                            As a spearheading force in the industry driving forward this revolution, TEAMC-2018 provides just the right platform and visibility to showcase your company, its vision and its technological offerings to a wide spectrum of professionals. Your participation will give an opportunity to nurture the talent pool and spur a collaborative atmosphere necessary for progress.<br/><br/>
Kindly see the various sponsorship packages and offers and give us an opportunity to collaborate on this initiative and work together for its success right from the outset.<br/><br/>
Yours sincerely<br/><br/>
General Chair<br/><br/>
Sponsorship Chairs<br/><br/>
Industry Liaison Chair<br/><br/>
Finance Chair<br/><br/>
                        </span>
                    </div>

                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.1;margin-bottom: 15px;font-size: 22px;text-transform: uppercase;">
                        For detailed information, <a href="http://www.nsit.ac.in/sponsorships">please see here.</a>
                    </h1>

                </div>
            </div>
`);
  });

  $('#infoButton').click(function () {

    // AIzaSyDBqAJQ9d0sn9iRRrjJjjUtRbbAsBS-0uU
    $("#inner-wrapper").empty();
      $("#inner-wrapper").append(`
      <div style="background-color: white;">
        <div style="padding: 30px; font-size: 14pt; color: black">
          <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
               INFORMATION</h1>
                  
            <div class="overview-description" style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
              
            </div>
          </div>    
      </div>    
    `);

      $("#map").css('visibility', 'visible');
      $("#map").css('height', '400px');
      // $("#map").css('width', '100%');
  });



  $(window).scroll(function () {

      if( $(window).scrollTop()> $('.header-jumbotron').height() )
             $('.navbarTots').addClass('altNav');
      else  $('.navbarTots').removeClass('altNav');
  });


    
});
