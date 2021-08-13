<!--주요링크-->
<? include_once $_SERVER["DOCUMENT_ROOT"]."/aki_profile/inc/start.html" ?>
<!--메인메뉴-->
<? include_once $_SERVER["DOCUMENT_ROOT"]."/aki_profile/inc/header.html" ?>
<!--플러그인-->
<link rel="stylesheet" type="text/css" href="/aki_profile/js/jquery.pagepiling.css">
<script type="text/javascript" src="/aki_profile/js/jquery.pagepiling.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#pagepiling').pagepiling({
			anchors: ['page1', 'page2', 'page3', 'page4'],
		});
	});
</script>


  
<!--index 시작-->
<div id="pagepiling">
	
	<div class="section navy_bg" id="page1">
		
		<div id="copyright_box">
			<div id="copyright_inner">
				<p id="copyright_title">이미지 저작권 관련 공지</p>
				<p id="copyright_text">
					본사이트는 포트폴리오를 목적으로 제작된 사이트입니다.<br>
					사이트 내 이미지의 저작권은 모두 다른 곳에 있으므로 개인 및 상업적<br>
					목적으로 사용 시에 법적인 문제가 발생할 수 있습니다.<br>
					사이트 내 이미지에 문제가 발생할 경우 즉시 교체 하도록 하겠습니다.<br>
					<br>
					<span>이미지 관련 문의:<br>
					aki0124@naver.com</span>
				</p>
			</div>
			<div id="copyright_close"></div>
		</div>
		
		<div id="copyright_bg"></div>
		
		
		<section class="contants_inner">
			<h2 class="hidden">메인비쥬얼</h2>
			<div id="visual_title">
				<p id="visual_slogan">Thank you for coming to my</p>
				<p id="visual_headline">DESIGN BALANCE</p>
				<p id="my_name">portfolio by jaehee</p>
			</div>
			<div id="more_wrap">
				<section id="more_inner">
					<h3 class="hidden">포트폴리오 바로가기</h3>
					<div id="uiux_box">
						<a href="/aki_profile/uiux.php">
						<p class="portflio_text">UI/UX</p>
						</a>
					</div>
					<div id="print_box">
						<p class="portflio_text">PRINT</p>
					</div>
					<div id="uiux_more">
						<p id="btn_left"></p>
						<p class="portflio_more">UI/UX CURRICULUM<br><span>PORTFILO</span> MORE</p>
					</div>
					<div id="print_more">
						<p id="btn_right"></p>
						<p class="portflio_more">EDITING DESIGN<br><span>PORTFILO</span> MORE</p>
					</div>
				</section>
			</div>
			
			<div id="uiux_line"></div>
			<div id="print_line"></div>
			<div id="visual_bg"></div>
			<p id="btn_mouse"></p>
			
		</section>
		
	</div>
	
	<div class="section about_bg" id="page2">
		<section class="contants_inner">
			<p class="contents_slogan">DESIGN BALANCE</p>
			<h2 class="contents_title point_color">ABOUT ME</h2>
			
			<div id="slide_inner">
				<ul id="slide_list">
					<li>
						<div id="about00_list">
				        	<p id="about00_skill">
				        		UI/UX DESIGN<br>
								HTML5/CSS3<br>
								Java Script/jQuery<br>
								W3C/KWCAG 2.1<br>
								RWD/AWD<br>
								Adobe Graphic Tools<br>
							</p>
							<p id="about00_name">
								Leejaehee
							</p>
							<p id="about00_text">
								NCS UI/UX 교육이수<br>
								편집디자인 6년
							</p>
				        </div>
				        <div id="about00_img">
				        	
				        </div>
					</li>
					<li>
						<p id="about01_img"></p>
				        <p id="about01_text">
				        	직접 홈페이지 기획부터 디자인, <span class="point_color">하드 코딩</span>까지 반응형 웹을 구축하면서<br>
							디자이너와 개발자간에 의사소통 방법을 알게 되었으며 웹디자인에 필요한 포토샵과 일러스트레이터를 학습하고<br>
							홈페이지 구현에 필요한 <span class="point_color">HTML과 CSS, j-Query</span> 대한 실력을 쌓을 수 있었습니다.<br>
							웹디자인과 퍼블리싱으로 사용자가 공감하는 홈피이지를 제작하기 위해 노력하겠습니다.<br>
							<br>
							실력의 깊이를 쌓아가는 <span class="point_color">웹 퍼블리셔</span> 되고 싶습니다.<br>
							빠르게 변화하는 웹 환경에서 다양한 상황에 대처하고 지속적으로 노력하고 성장하겠습니다.<br>
				        </p>
					</li>
					<li>
						<ul id="about02_list">
			      			<li>
			      				<p class="career_chapter">CAREER</p>
					        	<p class="career_num">6</p>
					        	<span class="career_year">year</span>
					        	<p class="career_title">EDITING<br>DESIGN</p>
					        	<p class="career_text">편집디자인 경력 6년</p>
			      			</li>
			      			<li>
			      				<p class="career_chapter">CURRICULUM</p>
					        	<p class="career_num">800</p>
					        	<span class="career_web">time</span>
					        	<p class="career_title">UI/UX<br>HTML5,CSS3</p>
					        	<p class="career_text">NCS 교육이수 </p>
			      			</li>
			      			<li>
			      				<p class="career_chapter">DEVELOP</p>
					        	<p class="career_num">1<span class="career_plus">+</span>1</p>
					        	<p class="career_title">DESIGN<br>BALANCE</p>
					        	<p class="career_text">디자인+개발</p>
			      			</li>
			      		</ul>
					</li>
					<li>
						<div class="about_career" id="editing_design">
			  				<p class="career_chapter">CAREER</p>
				        	<p class="career_num">6</p>
				        	<span class="career_year">year</span>
				        	<p class="career_title">EDITING<br>DESIGN</p>
				        	<p class="career_text">편집디자인 경력 6년</p>
			  			</div>
				  		<div class="about_box" id="editing_box">
					        <ul id="career_imgList">
					        	<li></li>
					        	<li></li>
					        	<li></li>
					        </ul>
					        <p class="career_story">
					        	저는 매우 꼼꼼하고 섬세하게 일합니다. 그래서 일을 하면서 남들보다 시간이 오래 걸리기도 합니다. 
					        	편집 작업을 하면서 동기와의 작업 시간에 맞추기 위해 작업시간을 정해놓고 시간 내에 하기위해 노력하였습니다. 
					        	또한 완성도도 중요하기 때문에 틈이 나는 대로 계속 연습을 하였습니다. 
					        	선배님께 실력을 인정받을 수 있었고 짧은 수습기간 후 정규직으로 전환되는 기회를 맞을 수 있었습니다. 
					        	일에 대한 책임감에 노력을 더한 결과 완성도도 높이고 실력도 인정받을 수 있었습니다. 
					        	지금도 일을 하는 것에 목적을 두는 것이 아니라 잘 하는 것을 목적으로 일할 수 있습니다.
					        </p>
					      </div>
					</li>
					<li>
						<div class="about_career" id="career_design">
			  				<p class="career_chapter">CURRICULUM</p>
				        	<p class="career_num">800</p>
				        	<span class="career_web">time</span>
				        	<p class="career_title">UI/UX<br>HTML5,CSS3</p>
				        	<p class="career_text">NCS 교육이수 </p>
			  			</div>
				  		<div class="about_box" id="career_box">
					        <ul id="web_imgList">
					        	<li></li>
					        	<li></li>
					        	<li></li>
					        </ul>
					        <p class="career_story">
					        	코딩 작업은 힘들지만 정말 재미있습니다.  포트폴리오 작업을 하면서 반응형 홈페이지 작업 중 축소를 하면 
					        	컨텐츠의 위치 조정이 의도했던 대로 되지 않았습니다.  학원에서 수업 받는 8시간을 고민했지만 결국 해결하지 못하고 
					        	집으로 돌아왔습니다.  몸은 피곤했지만 집으로 돌아와 바로 원인을 찾기 시작하였습니다.  
					        	구글링을 이용하고 유튜브 강의도 보았습니다.  그 결과 HTML 코딩 작업 중 구조적인 오류를 발견할 수 있었습니다.  
					        	요소‘ul' 안에는 자식객체로 ’li‘ 밖에 가질 수 없는데, 그 안에 'span' 요소를 넣었던 것이 문제의 핵심이었습니다.  
					        	수정이 끝나자 원하는 형태의 구조를 구현할 수 있었습니다.  지금은 간단한 문제이지만 스스로 문제를 해결하고 
					        	자심감과 성취감을 얻을 수 있었습니다.
					        	‘너무 힘든데 정말 재미있다’는 말에 비로소 공감하는 제 자신을 발견하고 웹 퍼블리싱에 대한 애정과 보람을 느꼈습니다. 
					        </p>
					      </div>
					</li>
					<li>
						<div class="about_career" id="balance_design">
			  				<p class="career_chapter">DEVELOP</p>
				        	<p class="career_num">1<span class="career_plus">+</span>1</p>
				        	<p class="career_title">DESIGN<br>BALANCE</p>
				        	<p class="career_text">디자인+개발</p>
			  			</div>
				  		<div class="about_box" id="balance_box">
					        <ul id="plus_imgList">
					        	<li></li>
					        	<li></li>
					        	<li></li>
					        </ul>
					        <div class="plus_box">
						        <span class="plus_num">01</span>
						        <span class="plus_story">
						        	유동적인 웹디자인 업계 특성을 고려해 지식시장 동향을 항상 주시하겠습니다. 
						        	빠르게 변화하는 트랜드에 발맞추어 최신 프로그래밍 언어를 습득하고 활용하겠습니다.
						        </span>
					        </div>
					        <div class="plus_box">
						        <span class="plus_num">02</span>
						        <span class="plus_story">
						        	매체 특성에 대한 이해를 바탕으로 디자인을 효과적으로 구현할 수 있는 능력을 향상시키겠습니다.  
						        	이에 필요한 멀티미디어에 대한 트렌드 지식, 제작, 프로그래밍 방법을 깊이 학습하겠습니다.
						        </span>
					        </div>
					        <div class="plus_box">
						        <span class="plus_num">03</span>
						        <span class="plus_story">
						        	 팀원간의 원활한 커뮤니케이션 태도를 갖고 디자인과 기술의 전 과정을 수용하는 적극적인 자세로 협업할 것입니다.
						        	따뜻한 마음으로 회사와 고객을 생각하는 제몫 이상을 해내는 웹퍼블리셔가 되겠습니다.
						    	</span>
					    	</div>
						</div>
					</li>
					<li>
						<p id="link_title">ABOUT<span>+</span></p>
				      	<ul id="link_list">
				      		<li>
				      			<a href="http://akimyo.dothome.co.kr/aki_profile/uiux.php" alt="포트폴리오 바로가기">
				      				<p>UI/UX CURRICULUM <span class="point_color">PORTFILO</span></p>
				      			</a>
				      		</li>
				      		<li>
				      			<a href="#" alt="포트폴리오 준비중">
				      				<p>EDITING DESIGN <span class="point_color">PORTFILO</span></p>
				      			</a>
				      		</li>
				      		<li>
				      			<a href="http://aki0124.dothome.co.kr/star_rwd/" target="_sub" alt="반응형 URL 바로가기">
				      				<p>STARGROUND <span class="point_color">RWD</span></p>
				      			</a>
				      		</li>
				      		<li>
				      			<p>STARGROUND <span class="point_color">MOBILE</span></p>
				      		</li>
				      		<li>
				      			<p>DOWNLOAD <span class="point_color">RESUME</span></p>
				      		</li>
				      	</ul>
					</li>
				</ul>
			</div>
			
			<div id="slide_num">
				<p>01<span>/07</span></p>
			</div>
			
			<div id="slide_prev"></div>
			<div id="slide_next"></div>
			
		</section>
		
	</div>
	
	
	<div class="section skill_bg" id="page3">
		<section class="contants_inner">
			<p class="contents_slogan">DESIGN BALANCE</p>
			<h2 class="contents_title point_color">DESIGN SKILLSET</h2>
			
			<div id="skill_area">
				<ul id="skillSet">
					<li data-count="80">
						<div class="skill_box">
							<p class="skill_icon">
								<img src="/aki_profile/images/index/skill_icon-01.png" alt="아이콘">
							</p>
							<p class="skill_title">UI/UX Design</p>
							<p class="skill_text">UI/UX에 대한 구체적인 이해, 사용자의 사용성이나 니즈에 따른 아이디어 도출 및 구성</p>
						</div>
						<div class="second circle">
							<strong></strong>
						</div>
					</li>
					<li data-count="85">
						<div class="skill_box">
							<p class="skill_icon">
								<img src="/aki_profile/images/index/skill_icon-02.png" alt="아이콘">
							</p>
							<p class="skill_title">HTML5/CSS3</p>
							<p class="skill_text">기본적인 레이아웃 구조 설계 및 디자인에 따른 CSS속성 적용</p>
						</div>
						<div class="second circle">
							<strong></strong>
						</div>
					</li>
					
					<li data-count="85">
						<div class="skill_box">
							<p class="skill_icon">
								<img src="/aki_profile/images/index/skill_icon-03.png" alt="아이콘">
							</p>
							<p class="skill_title">jQuery/java script</p>
							<p class="skill_text">풀다운 메뉴 구현 및 슬라이드 제작, jQuery Mobile 사용</p>
						</div>
						<div class="second circle">
							<strong></strong>
						</div>
					</li>
					<li data-count="75">
						<div class="skill_box">
							<p class="skill_icon">
								<img src="/aki_profile/images/index/skill_icon-04.png" alt="아이콘">
							</p>
							<p class="skill_title">W3C/KWCAG 2.1</p>
							<p class="skill_text">웹표준,웹접근성 지침에 적합한 퍼블리싱 </p>
						</div>
						<div class="second circle">
							<strong></strong>
						</div>
					</li>
					<li data-count="70">
						<div class="skill_box">
							<p class="skill_icon">
								<img src="/aki_profile/images/index/skill_icon-05.png" alt="아이콘">
							</p>
							<p class="skill_title">RWD/AWD</p>
							<p class="skill_text">다양한 디바이스 환경을 고려한 미디어 쿼리 구현</p>
						</div>
						<div class="second circle">
							<strong></strong>
						</div>
					</li>
					<li data-count="95">
						<div class="skill_box">
							<p class="skill_icon">
								<img src="/aki_profile/images/index/skill_icon-06.png" alt="아이콘">
							</p>
							<p class="skill_title">Graphic Tools</p>
							<p class="skill_text">일러스트레이터, 포토샵, 인디자인 등을 활용 각종 편집  디자인</p>
						</div>
						<div class="second circle">
							<strong></strong>
						</div>
					</li>
					
				</ul>				
			
			</div>
		</section>
	</div>
	
	<div class="section" id="page4">
		<section class="contants_inner">
			<p class="contents_slogan">DESIGN BALANCE</p>
			<h2 class="contents_title point_color">CONTACT ME</h2>
		
		<div id="contact_ready">
			<p class="code_text">< ready ></p>
			<p id="contact_slogan">FRONT-END<br>WEB PUBLISHING</p>
			<p class="code_text">< /ready ></p>
		</div>
		
		<div id="contact_information">
			<p class="code_text">< information ></p>
			<p class="information_title">name</p>
			<p class="information_text">lee jaehee</p>
			<p class="information_title">e-mail</p>
			<p class="information_text">00000@naver.com</p>
			<p class="information_title">mobile</p>
			<p class="information_text">010-0000-0000</p>
			<p class="code_text">< /information ></p>
		</div>

		</section>
	</div>
	
	
</div>












  
  
</body>
</html>
