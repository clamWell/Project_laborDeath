$(window).load(function() {

  var ieTest = false,
    screenWidth = $(window).width(),
    screenHeight = $(window).height(),
    imgURL = "http://img.khan.co.kr/spko/storytelling/2019/labordeath/",
    isMobile = screenWidth <= 710 && true || false,
    isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false;

  var agent = navigator.userAgent.toLowerCase();
  if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    ieTest = true;
    $(".ie-block").show();
  } else {
    ieTest = false;
  }

  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  $(window).resize(function() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
  });

  var aCode = [
    "작업계획서 미작성 혹은 사전 위험평가 미실시",
    "안전대 미지급/미착용 혹은 안전대 부착설비 미설치/설치불량",
    "안전모 미지급/미착용 혹은 착용상태 불량",
    "안전난간, 추락방호망 등 추락방지설비 없음",
    "단독 작업 혹은 작업지휘자(감시인,관리자) 없음",
    "위험지역 출입금지 조치 미실시",
    "기계의 정비/수리/확인등의 작업 시 운전정지 하지 않음",
    "설계/작업 기준을 미준수한 불량한 방법 사용",
    "작업 공정의 위험성 등 안전교육 미실시",
    "기계의 안전장치 강제 해제, 불량/미비(뚜껑이 열리면 동작 안 해야 하는데 동작)",
    "안전감시단 미배치 혹은 관리자 감시 소홀 ",
    "건설/하역용 차량 유도자 미배치",
    "추락 위험이 있는 열린 공간(개구부) 방치 및 방호조치 미흡",
    "고소작업시 비계/안전발판 쓰지 않고 작업",
    "안전한 작업통로/작업공간 미확보",
    "적재 불량 등 불안정한 상태의 중량물 방치",
    "전도방지, 고정장치 등 안전조치가 미흡한 사다리/비계/고소작업대에서 작업 ",
    "고소작업시 비계/안전발판 쓰지 않고 사다리 사용",
    "지붕 위 작업 시 선라이트, 슬레이트 등 약한 소재 밟음",
    "불명확한 의사소통 방법/신호로 인한 사고",
    "작업환경이나 기계/작업도구의 구조적 결함",
    "중량물 인양시 부적절한 방법 사용 혹은 안전수칙 미준수",
    "끼임의 위험이 있는 기계 등에 방호조치 미비",
    "기계/차량 등의 정기 검사 및 정비 미실시",
    "굴삭기, 기계차 등 면허 없는 사람이 조종",
    "훼손되거나 불량인 작업 도구나 부품 사용",
    "내부 조도 미흡으로 위험물 식별 어려움",
    "전기 작업 시 전원차단/절연 상태 미흡/미확인",
    "차량/기계 사용 중 사람이 타지 않아야 할 곳에 탑승",
    "건설기계 위험 반경 내 출입금지 미실시",
    "위험 작업 시 마스크/내열성 앞치마/끼임방지 장갑 등 특수 보호구 미착용",
    "전기 작업시 절연장갑/절연모 등 절연보호구 미지급/미착용",
    "기계/설비 등의 넘어짐 방지조치 미흡",
    "낙하 위험이 있는 중량물(승강기 등) 고정 미흡",
    "운전위치 이탈 시 안전조치(주차브레이크, 고임목) 미실시",
    "중량물 운반 시 하중/규격에 맞지 않는 기구 사용",
    "상부 안전난간이 없는 등 부적합한 이동식 비계 사용",
    "굴착사면의 붕괴방지조치 미실시",
    "기계/차량의 구조변경 및 능력에 맞지 않는 사용",
    "낙하물에 맞을 위험이 있는 곳에서 작업",
    "차량계 건설기계 안전벨트 미착용",
    "작업공간 내 산소 및 유해가스 농도 미측정",
    "차량/건설기계 운행로와 작업자 보행로를 구분하지 않음",
    "무자격자/비전문가가 작업 진행",
    "밀폐공간 작업 전, 작업 중 환기 실시 미흡",
    "인화성/위험 물질 취급 부주의",
    "마모/훼손되거나 강도가 약한 로프/고리/발판 사용",
    "기계 끼임 등 위험상황시 순간정지장치 없음",
    "작업 도구/기계 목적 외 사용",
    "비계와 건물 사이 뚫린 공간에 방호조치 불량 혹은 바깥 안전난간 설치 미비",
    "고소작업대 안전난간 미설치 혹은 불량",
    "달비계 사용시 별도의 구명줄 미설치",
    "사다리를 상부 높이보다 낮게 설치하는 등 부적절한 사용",
    "차량 운전자의 시야 미확보",
    "미끄럽거나 장애물이 많아 넘어질 위험 많은 바닥 방치",
    "고온, 고압의 기계 사용시 안전조치 미흡",
    "굴착면 기울기 미준수",
    "벌목 작업 시 안전 대피로/위험신호 미지정",
    "달비계 설치시 로프 체결상태 미점검 혹은 감시자 미배치",
    "안전거리 미교육 혹은 미준수",
    "화재/사고 등 비상시 대피로 및 대피장소 미확보 혹은 신호방법 부재",
    "위험물질 근처에서 화재/폭발 위험성 있는 작업",
    "추락/낙하 위험이 있는 곳에서 안전장치 없이 차량 운행",
    "안전 인증 없이 차량/기계의 임의개조",
    "금속/유기화합물 분진으로 인한 폭발방지 미흡",
    "사고 발생 원인 미상",
    "구명조끼 미지급 혹은 미착용",
    "낙하물 방지망등 안전시설물 설치 미흡",
    "적절한 보강조치 않은 상태에서 작업 중 붕괴",
    "고소작업대 과상승 방지장치 설치 불량",
    "교통규칙 무시한 차량 운행 및 주차",
    "경사진 공간에서 차량에 화물 적재 혹은 차량 연결 실시",
    "벌목 작업 시 기타 부적절한 방법 사용",
    "지반침하 붕괴방지조치 미실시",
    "안전인증 미실시 하거나 기준에 미달하는 설비 사용 ",
    "적절한 휴게시설 미비 , 휴게시간 미부여",
    "악천후 속 무리한 작업 ",
    "가공작업 중 가공물에 고정장치 미체결",
    "벌목 작업 시 방향베기(수구) 작업 미실시",
    "화재 위험 장소 소화기/소화전 작동 불량",
    "전기 기계 기구의 접지 미실시",
    "도로의 폭이 좁거나, 도로상의 장애물 방치",
    "전기설비 단락으로 인한 스파크 발생",
    "볼트/나사 풀림방지조치 미실시",
    "개인 질병",
    "작업시 집중력 저하, 실수 발생",
    "소금 등의 주변 비치 소홀",
    "산업재해 발생에 따른 구조등의 비상대응 미실시",
    "거푸집 혹은 갱폼의 조립 불량",
    "CCTV 미설치로 작업공간 모니터링 불가",
    "잠수 작업에 맞는 비상 장비 미지급/미착용",
    "감염병/독충 예방 조치 미실시",
    "강도/길이/너비 등이 부적절한 부속품 사용",
    "밀폐공간 출입 인원 점검 미실시",
    "유기용제에 의한 건강장애 발생"
  ]

  $(".common-footer").addClass("common-footer-dark");

  // intro animation

  var hideHeader = function() {
    if (isMobile == true) {
      $(".art_header ").animate({
        "top": "-160px"
      }, 500, "swing");
    } else {
      $(".common_header").animate({
        "top": "-160px"
      }, 500, "swing");
    }
  };

  var showHeader = function() {
    if (isMobile == true) {
      $(".art_header ").animate({
        "top": "0px"
      }, 1000, "swing");
    } else {
      $(".common_header").animate({
        "top": "0px"
      }, 1000, "swing");
    }
  };

  var step01aniEnd = false,
    step02aniEnd = false,
    step03aniEnd = false;

  $("body").removeClass("fixed");
  $(".loading-page").delay(1000).fadeOut(1000, function() {
    $(".step--01-ment p").fadeIn();
    $(".c-s-01").fadeIn(function() {
      step01aniEnd = true;
    });
  });

  var randomRange = function(n1, n2) {
    return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
  };
  var loopingSpreading;
  var photosCount = 0;
  var $introPhoto = $(".intro-photo");
  var spreadingPhotos = function() {
    $introPhoto.eq(photosCount).fadeIn(1500);
    photosCount++;
    if (photosCount == $introPhoto.length) {
      clearInterval(loopingSpreading);
      step03Act();
    }
  };

  var step02Act = function() {
    $(".step--01").fadeOut();
    for (var i = 0; i < $introPhoto.length; i++) {
      var yRange = (isMobile == true) && ($(".photo-random").height() - 100) || $(".photo-random").height() - 300;
      var x = randomRange(0, ($(".photo-random").width())) + "px";
      var y = randomRange(0, yRange) + "px";
      $introPhoto.eq(i).css({
        "left": x
      });
      $introPhoto.eq(i).css({
        "top": y
      });
    }
    loopingSpreading = setInterval(function() {
      spreadingPhotos();
    }, 500);
    $(".step02-final-photo, .c-s-02").fadeIn(function() {
      step02aniEnd = true;
    });
  };

  var showArtBody = function() {
    $(".story-intro").fadeOut(500);
    $(".story-body").animate({
      "height": $(".story-body").get(0).scrollHeight
    }, function() {
      $(this).height("auto");
      $(".intro-quo").animate({
        "opacity": "1"
      }, 1000);
    });
  };

  var step03Act = function() {
    clearInterval(loopingSpreading);
    showHeader();
    showArtBody();
  };

  $(".c-s-01, .start-death-icon").on("click", function() {
    if (step01aniEnd == true) step02Act();
  });
  $(".c-s-02, .step02-final-photo img").on("click", function() {
    if (step02aniEnd == true) step03Act();
  });
  $(".intro-skip").on("click", function() {
    clearInterval(loopingSpreading);
    showHeader();
    showArtBody();
  });
  // intro animation


  var nameCvt = function(n) {
    if (n == "-") {
      return "○○○"
    } else if (n.length < 2) {
      return n + "○○"
    } else {
      return n;
    }
  };

  var dateAscending = function(a, b){
  	var dateA = new Date(a.date).getTime();
  	var dateB = new Date(b.date).getTime();
  	return dateA > dateB ? 1 : -1;
  };

  victimValues.sort(dateAscending);

  // (Start) Make Icon
  var icon_mg = (isMobile == true) ? 2 : 4,
    icon_width = (isMobile == true) ? 13 : 15,
    icon_height = icon_width * 2,
    lineMaxNum = parseInt($("#iconHolder").width() / (icon_width + icon_mg)),
    iconNumb = victimValues.length;

  var settingSvgHolder = function() {
    var container = $("#iconHolder");
    container.css({
      "width": $(".icon-wrap").width(),
      "height": (iconNumb / lineMaxNum) * (icon_height + icon_mg) + 40
    });
  };

  settingSvgHolder();

  $("#userSelect").html(iconNumb);
  $(".count-index .total, .count-index .slash").css({
    "opacity": "0"
  });

  var makeXcor = function(i) {
    if (isMobile == true) {
      return (i % lineMaxNum) * (icon_width + icon_mg);
    } else {
      if (parseInt(i / lineMaxNum) % 2 == 1) { //홀수
        return (i % lineMaxNum) * (icon_width + icon_mg);
      } else { //짝수
        return (i % lineMaxNum) * (icon_width + icon_mg) + (icon_width * 0.5);
      }
    }
  };

  var makeYcor = function(i) {
    return parseInt(i / lineMaxNum) * (icon_height + icon_mg)
  };

  victimValues.map(function(e, i, a) {
    a[i].Xpos = makeXcor(i);
    a[i].Ypos = makeYcor(i);
  });

  var iconSetPosition = function() {
    icon.transition()
      .duration(function() {
        return Math.floor(Math.random() * 3500) + 1500
      })
      .ease(d3.easeQuadInOut)
      .attr("transform", function(d, i) {
        return "translate(" + d.Xpos + "," + d.Ypos + ")";
      })
    setTimeout(function() {
      afterIconSeting();
      $("body").removeClass("fixed");
    }, 3000);
  };

  var afterIconSeting = function() {
    $(".sec--2 .top-display .count-index .select").addClass("select-after");
    $(".sec--2 .sec-title").animate({
      "opacity": "1"
    }, 1000);
    $(".sec--2 .tab-holder").animate({
      "opacity": "1"
    }, 1000);
	$(".icon-guide").animate({"opacity":"1"});
    $(".icon-wrap").removeClass("icon-block");
    archAnimateDone = true;

		$(".count-index .total, .count-index .slash").animate({"opacity": "0.6"});
  };

  var iconDate;
  var pc = 0;


	// 사망자 아이콘 뿌리는 부분

  var iconHolder = d3.select("#iconHolder");
  var iconGroup = iconHolder.append("g").attr("class", "icon-group");
  var icon = iconGroup.selectAll(".icon")
    .data(victimValues)
    .enter().append("g")
    .attr("class", "icon")
    .attr("transform", function(d, i) {
      return "translate(" + d.Xpos + "," + ((-randomRange(0, screenHeight * 3)) + screenHeight) + ")";
    })
    .attr("data-index", function(d, i) {
      return i;
    })
    .style("width", icon_width)
    .style("height", icon_height)
    .style("fill", "rgba(255,255,255,0.5)");

  icon.append("rect")
    .attr("class", "iconBack")
    .style("width", icon_width)
    .style("height", icon_height)
    .attr("fill", "rgba(255,255,255,0.05)");

  icon.append("path")
    .attr("d", function(d) {
      if (d.accType == "떨어짐") {
        var n = randomRange(9, 13);
      } else if (d.accType == "끼임") {
        var n = randomRange(14, 17);
        var i_n = "jammed" + n;
      } else if (d.accType == "물체에 맞음") {
        var n = randomRange(18, 21);
        var i_n = "hit" + n;
      } else if (d.accType == "부딪힘") {
        var n = randomRange(22, 25);
        var i_n = "crash" + n;
      } else if (d.accType == "깔림·뒤집힘") {
        var n = randomRange(26, 29);
        var i_n = "burden" + n;
      } else {
        var n = randomRange(0, 8);
        var i_n = "extra" + n;
      }
      return iconPath[n]["path"];
    })
    .style("transform", (isMobile == true) ? "scale(0.9)" : "none")
    .style("fill", function(d) {
      if (d.accType == "떨어짐") {
        return "#e0523f";
      } else if (d.accType == "끼임") {
        return "#ed8c72";
      } else if (d.accType == "물체에 맞음") {
        return "#ef9770";
      } else if (d.accType == "부딪힘") {
        return "#fdca94";
      } else if (d.accType == "깔림·뒤집힘") {
        return "#feebcf";
      } else {
        return "#fff";
      }
    }).style("opacity", (isMobile == true) ? "1" : "0.8");

  if (isMobile == false) {

    icon.on("mouseover", function(d) {
      d3.select(this).select("path")
        .transition()
        .duration(100)
        .style("opacity", "1")
        .style("stroke", "#ffa409")
        .style("stroke-width", "3px")
      d3.select(this).select("rect")
        .transition()
        .duration(100)
        .style("fill", "rgba(255,255,255,0.2)")
    }).on("mouseout", function(d) {
      d3.select(this).select("path")
        .transition()
        .duration(100)
        .style("opacity", "0.8")
        .style("stroke-width", "0px")
      d3.select(this).select("rect")
        .transition()
        .duration(100)
        .style("fill", "rgba(255,255,255,0.05)")

    });


  }

  $(".year-tab ul li").on("click", function() {
    var year = $(this).attr("data-year");
    $(".year-tab ul li").removeClass("on");
    $(this).addClass("on");
    $(".temp-loading").fadeIn(function() {
      resetSvg();
      makeSvgIcon(year);
    });
  });

  // (Start) archive icon mouse hover click effect
  var makeTooltip = function(i) {
    $(".icon-tooltip .year").html(victimValues[i].date);
    if (victimValues[i].noRt == false) {
      if (victimValues[i].age == "" || victimValues[i].age == "-") {
        $(".icon-tooltip .person-info").html(victimValues[i].name);
        $(".top-display .victim .person-info").html(victimValues[i].name);
      } else {
        $(".icon-tooltip .person-info").html(victimValues[i].name + "<span>I</span>" + victimValues[i].age + "세");
        $(".top-display .victim .person-info").html((victimValues[i].name.length < 2 ? victimValues[i].name + "○○" : victimValues[i].name) + " " + String(victimValues[i].age == "미상" ? "나이 미상" : victimValues[i].age + "세"));
      }
    } else {
      var v_info = [(victimValues[i].name.length < 2 ? victimValues[i].name + "○○" : victimValues[i].name)];
      if (victimValues[i].age == "" || victimValues[i].age == "미상") {
				v_info.push("나이 미상");
			} else {
        v_info.push(victimValues[i].age + "세");
      }
      if (victimValues[i].occuType == "") {
        v_info.push(victimValues[i].occuType);
      }
      $(".icon-tooltip .person-info").html(v_info.join('<span>I</span>'));
      $(".top-display .victim .person-info").html(v_info.join(' '));
    }
  };

  $(".icon-holder").on("mouseover", ".icon", function() {
    if (isMobile == false) {
      var v_i = $(this).attr("data-index");
      makeTooltip(v_i);
      var x = $(this).position().left
      var y = $(this).position().top
      $(".icon-tooltip").css({
        "opacity": "1",
        "top": y + 30,
        "left": x - 50
      });

    }
  });

  $(".icon-holder").on("mouseout", ".icon", function() {
    $(".icon-tooltip").css({
      "opacity": 0
    });
    $(".back-photo img").attr("src", "");
    $(".top-display .victim .person-info").html("");
  });

  var card_ani = false;

  $(".accident-card-ani").css({
    "right": "0px"
  });

  $(".icon-holder").on("click", ".icon", function() {
    if (card_ani == false) {
      card_ani = true;
      $("body").addClass("fixed");
      var v_i = $(this).attr("data-index");
      makeCard(v_i);
	  $("#cardScroll").animate({scrollTop:0});
      $(".accident-card").show();
      if (isMobile == true) {
        $(".accident-card-ani").fadeIn(function() {
          $(".card-back").show();
          card_ani = false;
        });
      } else {
        $(".accident-card-ani").animate({
          "opacity": "1"
        }, 600, function() {
          $(".card-back").show();
          card_ani = false;
        });
      }
    }
  });
  // (End) archive icon mouse hover click effect

  // (Start) make Victim Card
  var makeVitimInfo = function(i) {
    if (victimValues[i].noRt == false) {
      return [victimValues[i].name.length < 2 ? victimValues[i].name + "○○" : victimValues[i].name, String(victimValues[i].age == "미상" || victimValues[i].age == "-" || victimValues[i].age == "" ? "나이 미상" : victimValues[i].age + "세")].join('<span>I</span>');
    } else {
      var infoArr = [victimValues[i].name.length < 2 ? victimValues[i].name + "○○" : victimValues[i].name, String(victimValues[i].age == "미상" || victimValues[i].age == "-" || victimValues[i].age == "" ? "나이 미상" : victimValues[i].age + "세")];
      if (victimValues[i].emp1 != "" && victimValues[i].emp1 != "-") {
        infoArr.push(victimValues[i].emp1);
      }
      if (victimValues[i].emp2 != "" && victimValues[i].emp2 != "-") {
        infoArr.push(victimValues[i].emp2);
      }
	  if (victimValues[i].occuType != "" && victimValues[i].occuType != "-") {
        infoArr.push(victimValues[i].occuType);
      }
      if (victimValues[i].skill != "" && victimValues[i].skill != "-") {
        var skillStr = victimValues[i].skill;
        if (victimValues[i].careerY == "") {} else {
          skillStr = skillStr + "(경력" + victimValues[i].careerY + "년)";
        }
        infoArr.push(skillStr);
      }	  
      return infoArr.join('<span>I</span>');
    }
  }

  var makeCard = function(i) {
    $(".accident-card .acc-date").html("<em class='head'>재해일시</em>" + victimValues[i].date + " " + victimValues[i].time);
    var p_info = makeVitimInfo(i)
    $(".accident-card .victim-info").html("<em class='head'>재해자</em>" + p_info);
    $(".accident-card .victim-info-immigrant").html("");
    if (victimValues[i].immigrant == "" || victimValues[i].immigrant == undefined) {
      $(".accident-card .victim-info-immigrant").hide();
    } else if (victimValues[i].immigrant != "") {
      $(".accident-card .victim-info-immigrant").show();
      if (victimValues[i].illegal != "") {
        $(".accident-card .victim-info-immigrant").html("* 재해자는 미등록 이주노동자(" + victimValues[i].immigrant + ")");
      } else {
        $(".accident-card .victim-info-immigrant").html("* 재해자는 이주노동자(" + victimValues[i].immigrant + ")");
      }
    }
    $(".accident-card .acc-type").html("사고유형 - " + victimValues[i].accType);
    $(".accident-card .full-des").html(victimValues[i].accSummary);

		$(".accident-card .main").html(victimValues[i].emp1Name);
		$(".accident-card .sub").html(victimValues[i].emp2Name);

    if (victimValues[i].act == "-"|| victimValues[i].indict == "#N/A") {
      $(".accident-card .act-info").hide();
    } else {
      $(".accident-card .act-info").show();
      $(".accident-card .act-info").html("<em class='head'>행정조치</em>" + victimValues[i].act);
    }

    if (victimValues[i].indict == "-" || victimValues[i].indict == "#N/A") {
      $(".accident-card .indictment-info").hide();
    } else {
      $(".accident-card .indictment-info").show();
      $(".accident-card .indictment-info").html("<em class='head'>송치의견</em>" + victimValues[i].indict);
    }

    $(".accident-card .card-wrap .acc-due .due-list").html("");
    if (victimValues[i].noRt == false) {
      $(".acc-due").hide();
    } else {
      $(".acc-due").show();
      for (v = 0; v < victimValues[i].accCause.length; v++) {
        $(".accident-card .card-wrap .acc-due .due-list").append("<p class='each-due'>" + aCode[victimValues[i].accCause[v]] + "</p>")
      }
    }
    $("#due").scrollTop(0);
    if (victimValues[i].noRt == false || victimValues[i].noPhoto == true) {
		$(".acc-photo-mobile-holder").hide();
		$(".accident-card .acc-photo").hide();
    } else {
		if(isMobile==true){
			$(".acc-photo-mobile-holder").show();
			$(".accident-card .acc-photo-mobile").show();
		}else{
			$(".accident-card .acc-photo-pc").show();
		}
      $(".accident-card .acc-photo").find("img").attr("src", imgURL + "acc-photo/" + victimValues[i].id + ".jpg");
    }
    if (isMobile == false) {
      var cardPosTop = (screenHeight < 750) && ((screenHeight - $(".accident-card").height()) / 2) || (screenHeight - $(".accident-card").height()) / 2 - 50;
      $(".accident-card").css({
        "top": cardPosTop
      });
    } else {
      $(".accident-card").css({
        "top": "0px"
      });
    }

  };

  var accPhotoAnimating = false;
  $(".acc-photo").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (accPhotoAnimating == false) {
      accPhotoAnimating = true;
      $(this).addClass("acc-photo-fixed");
      var $img = $(this).children("img");
      if (isMobile == true) {
       $(".acc-photo-mobile").css({
          "width": "85%",
          "height": "auto",
          "max-height": "80vh"
        });
        $img.css({
          "width": "100%",
          "height": "auto"
        });
        $(".acc-photo-fixed").animate({
          "top": (screenHeight - $img.height()) / 2,
          "right": "7.5%"
        }, 500, "swing", function() {
			$(".acc-photo-mobile-back").show();
            accPhotoAnimating = false;
        });
      } else {
        if ($img.width() <= $img.height()) {
          $(".acc-photo").css({
            "width": "auto",
            "height": "80vh"
          });
          $img.css({
            "height": "100%",
            "width": "auto"
          });
          $(".acc-photo-fixed").animate({
            "top": (screenHeight - $img.height()) / 2,
            "right": (screenWidth - $img.width()) / 2
          }, 500, "swing", function() {
            $(".acc-photo-back").show();
            accPhotoAnimating = false;
          });
        } else {
          $(".acc-photo").css({
            "width": "700px"
          });
          $img.css({
            "width": "100%",
            "height": "auto"
          });
          $(".acc-photo-fixed").animate({
            "top": (screenHeight - $img.height()) / 2,
            "right": (screenWidth - 700) / 2
          }, 500, "swing", function() {
            $(".acc-photo-back").show();
            accPhotoAnimating = false;
          });
        }
      }
    }
  });

  $(".acc-photo-back, .acc-photo-mobile-back").on("click", function() {
    if (accPhotoAnimating == false) {
      $(this).hide();
      $(".acc-photo").removeClass("acc-photo-fixed");
      if (isMobile == true) {
        $(".acc-photo-mobile").css({
          "width": "300px",
          "height": "auto",
		  "top": "auto",
          "right": "auto"
        });
      } else {
        $(".acc-photo").css({
          "width": "200px",
          "height": "auto",
          "top": "-10px",
          "right": "-10px"
        });
      }
      $(".acc-photo img").css({
        "width": "100%"
      });
    }
  });

  $(".close-btn, .card-back").on("click", function() {
    if (accPhotoAnimating == false) {
      $("body").removeClass("fixed");
      $(".card-back").hide();
      $(".accident-card").hide();
      if (isMobile == true) {
        $(".accident-card-ani").hide();
      } else {
        $(".accident-card-ani").css({
          "opacity": "0"
        });
      }
    }
  });


  if (isMobile == true) {
    $(".card-back").on("touchstart", function() {
      if (accPhotoAnimating == false) {
        $("body").removeClass("fixed");
        $(".card-back").hide();
        $(".accident-card").hide();
        if (isMobile == true) {
          $(".accident-card-ani").hide();
        } else {
          $(".accident-card-ani").css({
            "opacity": "0"
          });
        }
      }
    });
  }

  // (End) make Victim Card

  // (Start) Calendar Heatmap

  // date 데이터를 d3에서 사용할 수 있도록 가공한 새로운 객체 생성
  var dateValues = dpd.map(function(e, i, a) {
    var returnObj = {}
    returnObj.date = d3.timeDay(new Date(a[i].date));
    returnObj.value = Number(a[i].death);
    return returnObj;
  });

  // canvas 너비 스크린 크기에 맞춰 지정
  var svgHeatmap = d3.select("#svgHeatmap");

  var Cal_width = (isMobile == true) ? 750 : 850;
  var Cal_height = (isMobile == true) ? 290 : 320;
  $("#svgHeatmap").css({
    "width": Cal_width + "px",
    "height": Cal_height + "px"
  });

  var drawCalendar = function() {

    //연도 기준으로 데이터를 가공
    var years = d3
      .nest()
      //.key(d => d.date.getUTCFullYear())
      .key(function(d) {
        return d.date.getUTCFullYear()
      })
      .entries(dateValues)
      .reverse();

    //값들만 따로 빼서 배열로 만들고, 최대값, 최소값 변수를 생성
    var values = dateValues.map(function(v) {
      return v.value
    });
    var maxValue = d3.max(values);
    var minValue = d3.min(values);
    var cellSize = (isMobile == true) ? 13 : 15; // 날짜 셀 사이즈
    var yearHeight = cellSize * 7; //높이(요일x7)
    var g_transX = (isMobile == true) ? 30 : 50;

    // 요소들을 추가할 SVG 노드 생성
    var group = svgHeatmap.append("g");
    var year = group
      .selectAll("g")
      .data(years)
      .join("g")
      .attr("transform", function(d, i) {
        return "translate(" + g_transX + "," + ((yearHeight + 30) * i + cellSize * 3) + ")";
      });

    year.append("text")
      .attr("x", (isMobile == true) ? 8 : 0)
      .attr("y", (isMobile == true) ? -6 : -10)
      .attr("text-anchor", "end")
      .attr("font-size", (isMobile == true) ? 14 : 16)
      .attr("font-weight", 550)
      .attr("fill", "rgba(255,255,255,0.8)")
      .attr("font-weight", "normal")
      .text(function(d) {
        return d.key
      });

    var formatDay = function(d) {
      return ["월", "화", "수", "목", "금", "토", "일"][d.getUTCDay()];
    }

    var countDay = function(d) {
      return d.getUTCDay();
    }
    var timeWeek = d3.utcSunday;
    var formatDate = d3.timeFormat("%Y-%m-%d");
    var colorFn = d3
      .scaleSequential(d3.interpolateOrRd)
      .domain([Math.floor(minValue), Math.ceil(maxValue)]);
    var format = d3.format("+.2%");

    year
      .append("g")
      .attr("text-anchor", "end")
      .selectAll("text")
      .data(d3.range(7).map(function(i) {
        return new Date(1995, 0, i);
      }))
      .join("text")
      .attr("x", -10)
      .attr("fill", "rgba(255,255,255,0.5)")
      .attr("y", function(d) {
        return (countDay(d) + 0.5) * cellSize;
      })
      .attr("dy", "0.31em")
      .attr("font-weight", "normal")
      .attr("font-size", 11)
      .text(formatDay);


    var cal_tooltip = d3.select(".cal-tooltip");

    var cal_container = year.append("g").attr("class", "cal-plots-holder")
    var cal_plots = cal_container.selectAll("rect").data(function(d) {
      return d.values;
    }).join("rect");

    cal_plots.attr("width", cellSize - 1.5)
      .attr("height", cellSize - 1.5)
      .attr(
        "x",
        function(d, i) {
          return timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 10;
        }
      )
      .attr("y", function(d) {
        return countDay(d.date) * cellSize + 0.5;
      })
      .attr("fill", function(d) {
        return colorFn(d.value);
      })
      .attr("class", function(d) {
        if (d.value < 4) {
          return "day cate_0";
        } else if (4 <= d.value && d.value < 7) {
          return "day cate_1";
        } else if (7 <= d.value && d.value < 10) {
          return "day cate_2";
        } else if (d.value >= 10) {
          return "day cate_3";
        }
      })
      .append("title")
      .text(function(d) {
        return formatDate(d.date) + ", 사망자 " + d.value.toFixed(0) + "명";
      });


    cal_plots.on("mouseover", function(d) {
        d3.select(this).classed("dayHover", true);
        cal_tooltip.transition().duration(100).style("opacity", "1").style("height", "auto");
        cal_tooltip.html("<p class='date name'>" + formatDate(d.date) + "</p>" + "<p class='numb'>" + d.value + "명 </p>")

      })
      .on("mouseout", function(d) {
        d3.select(this).classed("dayHover", false);
        cal_tooltip.transition().duration(100).style("opacity", "0");
      });


    var legend = group
      .append("g")
      .attr(
        "transform",
        "translate(" + (850 - 202) / 2 + "," + (years.length * (yearHeight + 30) + cellSize * 3) + ")"
      );

    var categoriesCount = 7;

    var categories = [1, 2, 3, 4, 5, 6, 7].map(function(_, i) {
      var upperBound = (maxValue / categoriesCount) * (i + 1);
      var lowerBound = (maxValue / categoriesCount) * i;
      return {
        color: d3.interpolateOrRd(upperBound / maxValue),
        selected: true
      };
    });

    var cateText = [0, 14];
    var legendWidth = 20;
    var legendX = function(i) {
      if (i == 0) {
        return "-20px";
      } else {
        return (legendWidth * 7) + 20 + "px";
      }
    };

    legend
      .selectAll("rect")
      .data(categories)
      .enter()
      .append("rect")
      .attr("fill", function(d) {
        return d.color;
      })
      .attr("x", function(d, i) {
        return legendWidth * i;
      })
      .attr("width", legendWidth)
      .attr("height", 8);
    legend
      .selectAll("text")
      .data(cateText)
      .join("text")
      .attr("y", 7)
      .attr("x", function(d, i) {
        if (i == 0) {
          return "-30px";
        } else if (i == 1) {
          return (legendWidth * 7) + 10 + "px";
        }
      })
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
      .attr("fill", "rgba(255,255,255,0.5)")
      .text(function(d, i) {
        return cateText[i] + "명";
      });


  }

  drawCalendar();

  var isCalTabOn = false;
  d3.selectAll(".calendar-tab .tab-body span").on("click", function() {
    var tabIndex = $(this).index();
    var dayClassName = ".cate_" + tabIndex;
    var checkOn = $(this).hasClass("on");
    if (checkOn == true) {
      $(this).removeClass("on");
      var checkOthers = $(this).siblings("span").hasClass("on");
      if (checkOthers == true) {
        d3.selectAll(".day").classed("dayOff", true);
        d3.selectAll(dayClassName).classed("dayOn", false);
      } else if (checkOthers == false) {
        d3.selectAll(".day").classed("dayOff", false);
        d3.selectAll(dayClassName).classed("dayOn", false);
      }
    } else {
      $(this).addClass("on");
      d3.selectAll(".day").classed("dayOff", true);
      d3.selectAll(dayClassName).classed("dayOn", true);
    }

  });

  var cal_zooming = function(i) {
    if (i == 0) {
      $("#svgHeatmap").css("transform", "scale(1)").css("-ms-transform", "scale(1)");
      $(".zoomOut").removeClass("off");
      $(".zoomIn").addClass("off");
    } else if (i == 1) {
      $("#svgHeatmap").css("transform", "scale(0.5)").css("-ms-transform", "scale(0.5)");
      $(".zoomIn").removeClass("off");
      $(".zoomOut").addClass("off");
    }
  };

  $(".zoom ul li").on("click", function() {
    var z_i = $(this).index();
    cal_zooming(z_i);
  });

    // (End) Calendar Heatmap
	$(".swift-btn-holder .btn-tab ul li").on("click", function() {
		var type = $(this).attr("data-type");
		$(".swift-btn-holder .btn-tab ul li").removeClass("on");
		$(this).addClass("on");

		if (type == "full") {
		  $(".graph-fall2").hide();
		  $(".graph-fall").fadeIn();
		} else if (type == "detail") {
		  $(".graph-fall").hide();
		  $(".graph-fall2").fadeIn();
		}
	});

	// graph

	var graphData = [
						[{key:"현대차",acc:32},{key:"지자체",acc:31},{key:"대림",acc:31},{key:"포스코",acc:27},{key:"대우건설",acc:26},{key:"GS",acc:20},{key:"현대중공업",acc:20},{key:"HDC",acc:19},{key:"삼성",acc:17},{key:"효성",acc:16},{key:"롯데",acc:16},{key:"SK",acc:14},{key:"LG",acc:13},{key:"중흥건설",acc:13},{key:"공기업",acc:13},{key:"두산",acc:12},{key:"대우조선",acc:12},{key:"한화",acc:11},{key:"LS",acc:10}],
						[{key:"0~5m",acc:261},{key:"6~10m",acc:130},{key:"11~15m",acc:57},{key:"16~20m",acc:31},{key:"21~25m",acc:14},{key:"26~30m",acc:12},{key:"31~35m",acc:5},{key:"36~40m",acc:8},{key:"41~45m",acc:9},{key:"46m이상",acc:16}],
						[{key:"1m 이하",acc:10},{key:"1m",acc:45},{key:"2m",acc:67},{key:"3m",acc:76},{key:"4m",acc:47},{key:"5m",acc:48},{key:"6m",acc:34},{key:"7m",acc:30},{key:"8m",acc:29},{key:"9m",acc:24},{key:"10m",acc:17}],
						[{key:"0:00~0:59",acc:6},{key:"1:00~1:59",acc:1},{key:"2:00~2:59",acc:3},{key:"3:00~3:59",acc:4},{key:"4:00~4:59",acc:4},{key:"5:00~5:59",acc:5},{key:"6:00~6:59",acc:17},{key:"7:00~7:59",acc:44},{key:"8:00~8:59",acc:120},{key:"9:00~9:59",acc:134},{key:"10:00~10:59",acc:160},{key:"11:00~11:59",acc:137},{key:"12:00~12:59",acc:63},{key:"13:00~13:59",acc:122},{key:"14:00~14:59",acc:127},{key:"15:00~15:59",acc:121},{key:"16:00~16:59",acc:87},{key:"17:00~17:59",acc:38},{key:"18:00~18:59",acc:12},{key:"19:00~19:59",acc:12},{key:"20:00~20:59",acc:11},{key:"21:00~21:59",acc:13},{key:"22:00~22:59",acc:9},{key:"23:00~23:59",acc:11}]
					];
	var svgBodyId = ["#svgCompany", "#svgFall", "#svgFall2", "#svgTime"];
	var tooltipClass = [".company-tooltip", ".fall-tooltip", ".fallDetail-tooltip", ".time-tooltip"];
	var graphEle = [{"barWidth": 40,"barHeight": 15,"barMarginPC": 2,"barMarginM": 2,"multipleKeyPC": 5,"multipleKeyM": 7,"labelWidth": 70},
					{"barWidth": 50,"barHeight": 20,"barMarginPC": 3,"barMarginM": 2,"multipleKeyPC": 1,"multipleKeyM": 1,"labelWidth": 50},
					{"barWidth": 35,"barHeight": 20,"barMarginPC": 5,"barMarginM": 2,"multipleKeyPC": 3,"multipleKeyM": 3,"labelWidth": 50},
					{"barWidth": 52,"barHeight": 15,"barMarginPC": 3,"barMarginM": 2,"multipleKeyPC": 2,"multipleKeyM": 1.5,"labelWidth": 70}];

	var drawingGraph = function(t){
		var svgBody = d3.select(svgBodyId[t]);
		var data = graphData[t];
		var Values = data.map(function(d) {
		  return d.acc;
		});
		var maxValue = d3.max(Values);
		var minValue = d3.min(Values);
		var colorFn = d3
		  .scaleSequential(d3.interpolateOrRd)
		  .domain([minValue, maxValue]);		
		var tooltip = d3.select(tooltipClass[t]);
		if (isMobile == true) {
			var barHeight = graphEle[t].barHeight;
			var barMargin =  graphEle[t].barMarginM;
			var multipleKey = graphEle[t].multipleKeyM;
			var labelWidth = graphEle[t].labelWidth;
			var can_width = $(".d3-graph").eq(t).width();
			var can_height = (barHeight + barMargin) * data.length;
			$(svgBodyId[t]).css({
				"width": can_width + "px",
				"height": can_height + "px"
			});
		
			var canvas = svgBody.append("g")
			.attr("width", can_width)
			.attr("height", can_height)
			.attr("transform", "translate(" + labelWidth + ",0)");

			var GraphBar = canvas.selectAll("rect")
				.data(data)
				.enter().append("rect")
				.attr("fill", function(d) {
				  return colorFn(d.acc);
				})
				.attr("height", barHeight)
				.attr("class", "bar")
				.attr("width", function(d) {
				  return d.acc * multipleKey;
				}).attr("y", function(d, i) {
				  return i * (barHeight + barMargin);
				}).attr("x", function(d) {
				  return 0;
				});

			var labelHolder = canvas.append("g")
				.attr("transform", "translate(" + (-labelWidth) + ",14)")

			var Xaxis = labelHolder.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.attr("width", "50")
				.attr("transform", function(d, i) {
				  return "translate(0, " + (i * (barHeight + barMargin)) + ")";
				}).attr("fill", "rgba(255,255,255,0.8)")
				.attr("font-size", "10px")
				.attr("class", "graph-Xaxis")
				.attr("text-anchor", "start")
				.text(function(d) {
				  return d.key;
				});

			var yScale = d3.scaleLinear()
				.range([0, maxValue * multipleKey])
				.domain([0, maxValue]);

		    var yAxis = canvas.append("g")
				.attr("class", "graph-Yaxis")
				.attr("transform", "translate(0,-10)")
				.call(d3.axisTop(yScale).ticks(5).tickFormat(d3.format("d")));

			GraphBar.on("click", function(d) {
				  d3.select(this).classed("barHover", true);
				  tooltip.transition().duration(100).style("opacity", "1").style("height", "auto");
				  tooltip.html("<p class='name'>" + d.key + "</p>" + "<p class='numb'>" + d.acc + "명 </p>")
				})
				.on("mouseout", function(d) {
				  d3.select(this).classed("barHover", false);
				  tooltip.transition().duration(100).style("opacity", "0");
				});
		}else {
			var barWidth = graphEle[t].barWidth;
			var barMargin = graphEle[t].barMarginPC;
			var multipleKey = graphEle[t].multipleKeyPC;
			var can_width = (barWidth + barMargin) * data.length;
			var can_height = maxValue * multipleKey;
			$(svgBodyId[t]).css({
				"width": can_width + "px",
				"height": can_height + "px"
			});

			var canvas = svgBody.append("g")
				.attr("width", can_width)
				.attr("height", can_height);
			var GraphBar = canvas.selectAll("rect")
				.data(data)
				.enter().append("rect")
				.attr("fill", function(d) {
				  return colorFn(d.acc);
				})
				.attr("width", barWidth)
				.attr("class", "bar")
				.attr("height", function(d) {
				  return d.acc * multipleKey;
				}).attr("x", function(d, i) {
				  return i * (barWidth + barMargin);
				}).attr("y", function(d) {
				  return can_height - (d.acc * multipleKey);
				});

			GraphBar.on("mouseover", function(d) {
				d3.select(this).classed("barHover", true);
				tooltip.transition().duration(100).style("opacity", "1").style("height", "auto");
				tooltip.html("<p class='name'>" + d.key + "</p>" + "<p class='numb'>" + d.acc + "건 </p>")
			})
			.on("mouseout", function(d) {
				d3.select(this).classed("barHover", false);
				tooltip.transition().duration(100).style("opacity", "0");
			});

			var labelHolder = canvas.append("g")
				.attr("transform", "translate(" + (barWidth + barMargin) / 2 + "," + (can_height + 20) + ")")

			var Xaxis = labelHolder.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.attr("width", "30")
				.attr("transform", function(d, i) {
				  return "translate(" + (i * (barWidth + barMargin)) + ", 0)";
				}).attr("fill", "rgba(255,255,255,0.8)")
				.attr("font-size", "10px")
				.attr("class", "graph-Xaxis")
				.attr("text-anchor", "middle")
				.text(function(d) {
				  return d.key;
				});
			var yScale = d3.scaleLinear()
				.range([0, can_height])
				.domain([maxValue, 0]);

			var yAxis = canvas.append("g")
				.attr("class", "graph-Yaxis")
				.attr("transform", "translate(-10,0)")
				.call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format("d")));

	     }

	};
	for(g=0; g<graphData.length; g++){
		drawingGraph(g);
	};

  // (Start) Tab holder animation
  var togBtnHasClicked = false;
  $(".tab-toggle-btn").on("click", function(e) {
    e.preventDefault();
    if (togBtnHasClicked == false) {
      $(this).children(".open").removeClass("open-animation");
      $(".c-s-03").hide();
      togBtnHasClicked = true;
    }
    $(this).parent(".tab-holder").toggleClass("tab-holder-close");
  });

  $(".arch-tab .each-tab").find("span").on("click", function() {
    var tab_index = $(this).closest(".each-tab").attr("data-tab");
		var button_index = $(this).index();
		var checkOn = $(this).hasClass("on");
    if (checkOn == true) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }

  // (End) Tab holder animation

  // (Start) Archive icon sorting
	var filtering = function(d, k, l){

		switch (k) {

			case 0:  //사고유형
				switch (l) {
					case 0:
						return d.accType == "떨어짐" ? 1 : 0;
						break;
					case 1:
						return d.accType == "끼임" ? 1 : 0;
						break;
					case 2:
						return d.accType == "물체에 맞음" ? 1 : 0;
						break;
					case 3:
						return d.accType == "부딪힘" ? 1 : 0;
						break;
					case 4:
						return d.accType == "깔림·뒤집힘" ? 1 : 0;
						break;
					case 5:
						return ["떨어짐", "끼임", "물체에 맞음", "부딪힘", "깔림·뒤집힘"].indexOf(d.accType) == -1 ? 1 : 0;
						break;
				}
				break;

			case 1:   // 업종
			    switch (l) {
			       case 0:
						return d.category == "건설업" ? 1 : 0;
						break;
			       case 1:
						return d.category == "제조업" ? 1 : 0;
						break;
				   case 2:
						return d.category == "기타업종" ? 1 : 0;
						break;
				}
				break;

				case 2:   // 공휴일 여부
					switch (l) {
						case 0:
							return d.holiday ? 1 : 0;
							break;
						case 1:
							return d.holiday ? 0 : 1;
							break;
					}
					break;

				case 3:   // 연령대
					switch (l) {
						case 0:
							return d.age < 20 ? 1 : 0;
							break;
						case 1:
							return d.age >= 20 && d.age < 30 ? 1 : 0;
							break;
						case 2:
							return d.age >= 30 && d.age < 40 ? 1 : 0;
							break;
						case 3:
							return d.age >= 40 && d.age < 50 ? 1 : 0;
							break;
						case 4:
							return d.age >= 50 && d.age < 60 ? 1 : 0;
							break;
						case 5:
							return d.age >= 60 ? 1 : 0;
							break;
					}
					break;

				case 4:  // 숙련도
					switch (l) {
						case 0:
							return d.skill == "초급" ? 1 : 0;
							break;
						case 1:
							return d.skill == "중급" ? 1 : 0;
							break;
						case 2:
							return d.skill == "고급" ? 1 : 0;
							break;
					}
					break;

				case 5: //업체규모
					switch (l) {
						case 0:
							return d.employeeNumb < 5 ? 1 : 0;
							break;
						case 1:
							return d.employeeNumb >= 5 && d.employeeNumb < 50 ? 1 : 0;
							break;
						case 2:
							return d.employeeNumb >= 50 && d.employeeNumb < 300 ? 1 : 0;
							break;
						case 3:
							return d.employeeNumb >= 300 ? 1 : 0;
							break;
					}
					break;

				case 6:   // 사고형태
					switch (l) {
						case 0:
							return d.accCause.indexOf(1) != -1 && d.accCause.indexOf(3) != -1 ? 1 : 0;
							break;
						case 1:
							return d.accCause.indexOf(36) != -1 || d.accCause.indexOf(50) != -1 ? 1 : 0;
							break;
						case 2:
							return d.accCause.indexOf(13) != -1 || d.accCause.indexOf(17) != -1 ? 1 : 0;
							break;
						case 3:
							return d.accCause.indexOf(12) != -1 ? 1 : 0;
							break;
						case 4:
							return d.accCause.indexOf(18) != -1 ? 1 : 0;
							break;
						case 5:
							return d.accCause.indexOf(16) != -1 ? 1 : 0;
							break;
						case 6:
							return d.accCause.indexOf(6) != -1 || d.accCause.indexOf(9) != -1 || d.accCause.indexOf(47) != -1 ? 1 : 0;
							break;
						case 7:
							return d.accCause.indexOf(11) != -1 || d.accCause.indexOf(42) != -1 || d.accCause.indexOf(29) != -1 || d.accCause.indexOf(23) != -1 ? 1 : 0;
							break;
						case 8:
							return d.accCause.indexOf(56) != -1 || d.accCause.indexOf(37) != -1 ? 1 : 0;
							break;
						case 9:
							return d.accCause.indexOf(15) != -1 || d.accCause.indexOf(33) != -1 || d.accCause.indexOf(21) != -1 ? 1 : 0;
							break;
					}
					break;
			}

		};
		var archSelO = [];
		var archSelN = [];
		for (i=0; i<victimValues.length; i++){
			archSelO.push(0);
			archSelN.push(0);
		}

		icon.style("opacity", "1")
		var selecting = false;
		var onCheck = false;

		$(".arch-tab .each-tab").each(function(k){
			$(this).find("span").siblings().each(function(l){
					if ($(this).hasClass("on")){
						victimValues.forEach(function(v, i, a){
							if (filtering(a[i], k, l) == 1){ archSelO[i] = 1; }
						});
						selecting = true;
						onCheck = true;
					}
			});
			if (k > 0){
				if (selecting == true){
					if (k != 0 && archSelN.indexOf(1) == -1){
						archSelN = archSelO.slice();
					}
					for (i=0; i<victimValues.length; i++){
						archSelN[i] = archSelN[i] && archSelO[i];  
						archSelO[i] = 0;
					}
				} else {
					for (i=0; i<victimValues.length; i++){
						archSelO[i] = 0;
					}
				}

			} else if (k == 0){
				archSelN = archSelO.slice();
			}
			selecting = false;
		});

		if (onCheck == true){
			var selCount = 0;
			icon.filter(function(d, i){ return !archSelN[i]; }).style("opacity", "0.2");
			archSelN.forEach(function(v,i){
				if (v == 1) selCount++;
			});
			$("#userSelect").html(selCount);
		} else {
			$("#userSelect").html(victimValues.length);
		}

  });
  // (End) Archive icon sorting  


  $(".hideme").css({
    "opacity": "1",
    "top": "0px"
  })
  //Scroll Event listener
  var archAnimateDone = false;
  $(window).scroll(function() {
    var nowScroll = $(window).scrollTop();
    var movePos = $(".title-holder").position().top;
    var archPos = $(".icon-holder").position().top - screenHeight * 0.2;
    var tabPos = $(".spread-icon").position().top;

    if (nowScroll >= movePos) {
      $(".title-holder").addClass("title-holder-up");
	  if(isMobile==false){
		$(".interactive-header").fadeIn();
	  }	  
    } else if (nowScroll < movePos) {
       $(".title-holder").removeClass("title-holder-up");
	   $(".interactive-header").fadeOut();
			 
    };


    $(".hideme").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.3;
      var bottom_of_window = nowScroll + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          "opacity": "1",
          "top": "0px"
        }, 700, "swing");
      }
    });

    if (nowScroll >= tabPos && nowScroll <= $(".archive-para").position().top) {
      if (archAnimateDone == false) {} else if ($(".arch-tab").hasClass("tab-fixed") == false) {
        $(".arch-tab").addClass("tab-fixed tab-holder-close");
      }
    } else if (nowScroll < tabPos || nowScroll > $(".archive-para").position().top) {
      if ($(".arch-tab").hasClass("tab-fixed") == true) {
        $(".arch-tab").removeClass("tab-fixed");
        $(".arch-tab").addClass("tab-holder-close");
      }
    }


    if (nowScroll >= archPos) {
      if (archAnimateDone == false) {
        $("body").addClass("fixed");
        $(".spread-icon").animate({
          "opacity": "1"
        });
        $("html, body").animate({
          scrollTop: archPos
        }, 500, iconSetPosition());
      }
    }



  });


  // (Start) Plots map using leaflet.js
  var mapZoom = (isMobile == true) ? [6, 6, 8] : [7, 7, 8];
  var map = L.map("map").setView([35.949855, 128.001405], mapZoom[0]);
  map.setMaxBounds(bounds);
  var mapTile = new L.tileLayer("http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    minZoom: mapZoom[1],
    maxZoom: mapZoom[2],
  });
  map.addLayer(mapTile);
  //map.dragging.disable();
  map.scrollWheelZoom.disable();
  map.on("drag", function() {
    map.panInsideBounds(bounds, {
      animate: false
    });
  });
  var southWest = L.latLng(32.715666, 123.691693),
    northEast = L.latLng(39.502717, 131.660763);
  var bounds = L.latLngBounds(southWest, northEast);


  var geoData = acc_geoCode;
  var nullCount = 0;
  var makePlots = function() {
    var plots = L.layerGroup().addTo(map);
    for (var i = 0; i < geoData.length; i++) {
      if (geoData[i].lat != "" && geoData[i].lon != "") {
        var circles = new L.circle([geoData[i].lat, geoData[i].lon], {
          color: '#fa9461',
          weight: 1,
          fillColor: '#fddcaf',
          fillOpacity: 0.3,
          radius: 2000,
        });
        plots.addLayer(circles);
      } else if (geoData[i].lat == "" || geoData[i].lon == "") {
        nullCount++;
      }
    }
  };
  makePlots();

  // (End) Plots map using leaflet.js

});

// 공유

function sendSns(sns) {
  var url = encodeURIComponent(location.href),
    txt = encodeURIComponent($("title").html());
  switch (sns) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
