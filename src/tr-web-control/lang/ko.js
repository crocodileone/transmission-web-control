﻿// lang file
system.lang = {
	"name":"ko"
	,"system":{
		"title":"트랜스미션 웹 컨트롤"
		,"status":{
			"connect":"연결 중..."
			,"connected":"연결 완료"
			,"queue":"대기 목록:"
			,"queuefinish":"대기 목록 처리 완료."
			,"notfinal":"끝나지 않음."
		}
	}
	,"error":{
		"data-error":"데이터 오류."
		,"data-post-error":"데이터 포스트 오류."
	}
	,"config":{
		"save-path":"다운로드 폴더"
	}
	,"toolbar":{
		"start":"시작"
		,"pause":"정지"
		,"recheck":"재확인"
		,"start-all":"모두 시작"
		,"pause-all":"모두 정지"
		,"remove":"제거"
		,"remove-all":"모두 제거"
		,"remove-data":"데이터 제거"
		,"add-torrent":"토렌트 추가"
		,"attribute":"속성"
		,"alt-speed":"Alt-Speed"
		,"system-config":"설정"
		,"system-reload":"새로고침"
		,"about":"정보"
		,"reload-time":"자동 새로고침:"
		,"reload-time-unit":"초 간격"
		,"autoreload-disabled":"비활성화"
		,"autoreload-enabled":"활성화"
		,"search-prompt":"검색"
		,"tracker-replace":"트래커 변경"
		,"queue":"대기"
		,"ui-mobile":"모바일 UI"
		,"ui-original":"기본 UI"
		,"ui-computer":"데스크탑 UI"
		,"plugin":"확장/플러그인"
		,"tip":{
			"start":"선택한 토렌트 시작"
			,"pause":"선택한 토렌트 정지"
			,"recheck":"선택한 토렌트 재확인"
			,"recheck-confirm":"선택한 토렌트를 다시 확인 하시겠습니까? 이것은 약간의 시간이 걸릴 수 있습니다!"
			,"start-all":"모두 시작"
			,"pause-all":"모두 정지"
			,"remove":"제거"
			,"delete-all":"모두 삭제"
			,"delete-data":"데이터 삭제"
			,"add-torrent":"토렌트 추가"
			,"attribute":"속성"
			,"alt-speed":"Alt-speed"
			,"system-config":"설정"
			,"system-reload":"새로고침"
			,"about":"이 앱에 대해서"
			,"autoreload-disabled":"자동 새로고침 비활성화"
			,"autoreload-enabled":"자동 새로고침 활성화"
			,"tracker-replace":"트래커 변경"
			,"change-download-dir":"위치 설정"
			,"ui-mobile":"모바일 UI"
			,"ui-original":"원래 UI"
			,"more-peers":"더 많은 피어 탐색"
		}
	}
	,"menus":{
		"queue":{
			"move-top":"가장 위로 이동"
			,"move-up":"위로 이동"
			,"move-down":"아래로 이동"
			,"move-bottom":"가장 아래로 아동"
		}
		,"plugin": {
			"auto-match-data-folder": "자동으로 데이터 폴더 일치시키기"
		}
	}
	,"title":{
		"left":"안내"
		,"list":"토렌트"
		,"attribute":"속성"
		,"status":"상태"
	}
	,"tree":{
		"all":"모두"
		,"active":"활성화"
		,"paused":"정지"
		,"downloading":"다운로드 중"
		,"sending":"전송 중"
		,"error":"오류"
		,"warning":"경고"
		,"actively":"활성화 중"
		,"check":"확인 중"
		,"wait":"대기 중"
		,"search-result":"검색 결과"
		,"status":{
			"loading":"로딩 중..."
		}
		,"statistics":"통계"
		,"statistics":{
			"title":"통계"
			,"cumulative":"누적"
			,"current":"현제"
			,"uploadedBytes":"업로드 한 크기: "
			,"downloadedBytes":"다운로드 한 크기: "
			,"filesAdded":"파일 추가: "   
			,"sessionCount":"세션 수: " 
			,"secondsActive":"활성화된 시간: "
		}
		,"servers":"트래커"
		,"folders":"폴더"
		,"toolbar":{
			"nav":{
				"folders":"폴더"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"다운로드 속도:"
		,"uploadspeed":"전송 속도:"
		,"version":"버전:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"다운로드 폴더:"
			,"torrent-url":"토렌트 URL:"
			,"tip-torrent-url":"Tip：여러개 입력시 줄로 구분하세요"
			,"autostart":"자동 시작:"
			,"tip-autostart":""
			,"set-default-download-dir":"기본 폴더 지정"
			,"upload-file":"토렌트 파일:"
			,"nosource":"토렌트 파일이나 URL이 없음."
			,"tip-title":"업로드는 토렌트 URL에 우선합니다"
		}
		,"system-config":{
			"title":"서버 설정"
			,"tabs":{
				"base":"기본"
				,"network":"네트워크"
				,"limit":"제한"
				,"alt-speed":"예약"
				,"dictionary-folders":"폴더 사전"
			}
			,"config-dir":"트랜스미션 구성 디텍토리:"
			,"download-dir":"토렌트 다운로드 기본 경로:"
			,"download-dir-free-space":"남은 공간:"
			,"incomplete-dir-enabled":"미완료 폴더 사용"
			,"cache-size-mb":"디스크 캐쉬 크기:"
			,"rename-partial-files":"다운로드 중인 파일에'.part'사용"
			,"start-added-torrents":"토렌트 추가시 자동 시작"
			,"download-queue-enabled":"다운로드 대기열, 최대 대기열 수 사용:"
			,"seed-queue-enabled":"시딩 대기열, 최대 대기열 수 사용:"
			,"peer-port-random-on-start":"시작시 랜덤 포트 사용"
			,"port-forwarding-enabled":"포워딩 활성화"
			,"test-port":"포트 시험"
			,"port-is-open-true":"열린 포트"
			,"port-is-open-false":"닫힌 포트"
			,"testing":"시험 중..."
			,"encryption":"암호화:"
			,"encryption-type":{
				"required":"Required"
				,"preferred":"Preferred"
				,"tolerated":"Tolerated"
			}
			,"utp-enabled":"µTP (UPnP) 활성화"
			,"dht-enabled":"DHT 활성화"
			,"lpd-enabled":"LPD 활성화"
			,"pex-enabled":"PEX 활성화"
			,"peer-limit-global":"모든 토렌트 최대 피어 수:"
			,"peer-limit-per-torrent":"토렌트 당 최대 피어 수:"
			,"speed-limit-down-enabled":"최대 다운로드 속도:"
			,"speed-limit-up-enabled":"최대 업로드 속도:"
			,"alt-speed-enabled":"Alt speeds 사용"
			,"alt-speed-down":"최대 다운로드 속도:"
			,"alt-speed-up":"최대 업로드 속도:"
			,"alt-speed-time-enabled":"예약 사용"
			,"alt-speed-time":"시간："
			,"weekday":{
				"1":"월요일"
				,"2":"화요일"
				,"3":"수요일"
				,"4":"목요일"
				,"5":"금요일"
				,"6":"토요일"
				,"0":"일요일"
			}
			,"blocklist-enabled":"블랙리스트 사용"
			,"blocklist-size":"%n가지 블래리스트 규칙."
			,"seedRatioLimited":"기본 시드 비율:"
			,"queue-stalled-enabled":"Whether or not to consider idle torrents as stalled:"
			,"idle-seeding-limit-enabled":"토렌트가 오래동안 유휴상태이면, 정지합니다:"
			,"minutes":"분"
			,"nochange":"변경 안됨"
			,"saving":"저장 중..."
		}
		,"public":{
			"button-ok":"확인"
			,"button-cancel":"취소"
			,"button-reload":"새로고침"
			,"button-save":"저장"
			,"button-close":"닫기"
			,"button-update":"업데이트"
			,"button-config":"설정"
		}
		,"about":{
			"infos":"제작자：culturist<br/>서명：이 프로그램에 사용되는 아이콘들은 대부분은 네트워크에서 응용된다 만약 이것이 당신의 권리를 침해하는 어떤것이라도 발생시킨다면 나에게 그걸 삭제해달라고 말해라."
			,"check-update":"업데이트 확인"
		}
		,"torrent-remove":{
			"title":"제거 확인"
			,"confirm-text":"선택한 토렌트들을 삭제 하시겠습니까?"
			,"remove-data":"로컬 데이터 삭제"
			,"remove-error":"삭제 실패!"
		}
		,"torrent-changeDownloadDir":{
			"title":"새 폴더 설정"
			,"old-download-dir":"현재 폴더:"
			,"new-download-dir":"새 폴더:"
			,"move-data":"선택하면, 이전 위치에서 이동합니다. 그렇지 않으면, '새 디렉토리'를 검색합니다."
			,"set-error":"지정 오류!"
			,"recheck-data":"데이터 재확인."
		}
		,"system-replaceTracker":{
			"title":"트래커 변경"
			,"old-tracker":"현재 트래커:"
			,"new-tracker":"새 트래커:"
			,"tip":" 이 기능은<b>모든 토렌트</b>에서 트래커를 찾을 것이다. "
			,"not-found":"트래커를 찾을 수 없습니다."
		}
		,"auto-match-data-folder":{
			"title":"자동으로 데이터 폴더 일치시키기"
			,"torrent-count":"토렌트 수:"
			,"folder-count":"폴더 수:"
			,"dictionary":"폴더 사전"
			,"time-begin":"시작 시간:"
			,"time-now":"현재:"
			,"status":"상태:"
			,"ignore":"무시"
			,"working-close-confirm":"작업중입니다. 종료하시겠습니까?"
			,"time-interval":"시간 간격 (초단위):"
			,"work-mode-title":"방식:"
			,"work-mode":{
				"1":"개별 토렌트 일치"
				,"2":"개별 폴더 일치"
			}
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"이름"
			,"hashString":"해쉬"
			,"downloadDir":"다운로드 폴더"
			,"totalSize":"총 크기"
			,"status":"상태"
			,"percentDone":"진행 상황"
			,"remainingTime":"남은 시간"
			,"addedDate":"추가된 시간"
			,"completeSize":"완료된 크기"
			,"rateDownload":"다운로드 속도"
			,"rateUpload":"업로드 속도"
			,"leecherCount":"리처"
			,"seederCount":"시더"
			,"uploadedEver":"업로드 한 크기"
			,"uploadRatio":"비율"
		}
		,"status-text":{
			"0":"정지"
			,"1":"확인 대기"
			,"2":"확인 중"
			,"3":"다운로드 대기"
			,"4":"다운로드 중"
			,"5":"시드 대기"
			,"6":"시드 중"
		}
		,"attribute":{
			"tabs":{
				"base":"기본"
				,"servers":"트래커"
				,"files":"파일"
				,"users":"피어"
				,"config":"설정"
			}
			,"files-fields":{
				"name":"이름"
				,"length":"크기"
				,"percentDone":"진행 상황"
				,"bytesCompleted":"다운로드한 크기"
				,"wanted":"Wanted"
				,"priority":"우선도"
			}
			,"servers-fields":{
				"announce":"주소"
				,"announceState":"상태"
				,"lastAnnounceResult":"정보"
				,"lastAnnounceSucceeded":"성공"
				,"lastAnnounceTime":"연결된 시각"
				,"lastAnnounceTimedOut":"시간 초과"
				,"downloadCount":"다운로드 수"
				,"nextAnnounceTime":"다음 연결 시각"
			}
			,"peers-fields":{
				"address":"IP 주소"
				,"clientName":"클라이언트"
				,"flagStr":"플래그"
				,"progress":"진행"
				,"rateToClient":"클라이언트 평가"
				,"rateToPeer":"피어 평가"
			}
			,"status":{
				"true":"True"
				,"false":"False"
			}
			,"priority":{
				"0":"보통"
				,"1":"높음"
				,"-1":"낮음"
			}
			,"label":{
				"name":"이름:"
				,"addedDate":"추가된 시간:"
				,"totalSize":"총 크기:"
				,"completeSize":"완료된 크기:"
				,"leftUntilDone":"남은 크기:"
				,"hashString":"해쉬:"
				,"downloadDir":"다운로드 폴더:"
				,"status":"상태:"
				,"rateDownload":"다운로드 속도:"
				,"rateUpload":"업로드 속도:"
				,"leecherCount":"리처:"
				,"seederCount":"시더:"
				,"uploadedEver":"지금까지 한 업로드:"
				,"uploadRatio":"업로드 비율:"
				,"creator":"생성 클라이언트:"
				,"dateCreated":"제작일:"
				,"comment":"코멘트:"
				,"errorString":"스트링 오류:"
				,"downloadLimited":"다운로드 속도："
				,"uploadLimited":"업로드 속도："
				,"peer-limit":"피어 수 제한："
				,"seedRatioMode":"토렌트 시드 비율："
				,"seedIdleMode":"토렌트가 오래동안 유휴상태이면, 정지합니다 ："
			}
			,"tip":{
				"button-allow":"다운로드 확인한 파일"
				,"button-deny":"확인 생략한 파일"
				,"button-priority":"우선도 지정"
			}
			,"other":{
				"tracker-remove-confim":"이 트래커를 제거 하시겠습니까?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"속성 자동 확장"
		}
	}
	,"public":{
		"text-unknown":"알수없음"
		,"text-drop-title":"드래그 엔 드롭으로 토렌트 추가."
		,"text-saved":"저장됨"
		,"text-nochange":"변경 안됨"
		,"text-info":"정보"
		,"text-confirm":"확실합니까?"
		,"text-browsers-not-support-features": "현재 브라우저는이 기능을 지원하지 않습니다!"
		,"text-download-update":"이 업데이트를 다운로드"
		,"text-have-update":"업데이트를 사용할 수 있습니다"
	}
};
