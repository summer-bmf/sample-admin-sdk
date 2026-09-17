/**
 * 샘플 — 콘텐츠 목록 위 안내 위젯 (SDK 슬롯 · ADMIN)
 *
 * 슬롯 위젯은 페이지 전체가 아니라, 어드민 화면 "사이"에 끼워 넣는 조각입니다.
 *
 * 폴더 이름은 사람이 알아보기 위한 것일 뿐 배치와 무관합니다.
 * 어느 자리에 붙을지는 아래 createTemplate 의 slot 옵션만 정합니다.
 *   slot: 'admin.contents-list.list:before'  →  콘텐츠 목록 바로 위
 *
 * 빌드 산출물 이름도 slot 값에서 정해집니다(`:` → `--`).
 *   dist/admin.contents-list.list--before/
 * 포털에 배치를 등록할 때 넣는 "산출물 이름"이 이 값입니다 — 폴더 이름도,
 * 아래 name 값도 아닙니다.
 *
 * 이 자리는 호스트가 넘겨주는 context 가 없습니다(카탈로그의 context 칸이 비어 있음).
 * 그래서 화면에 쓰는 값은 전부 props 로 넘깁니다.
 *
 * 쓸 수 있는 자리 전체 목록: `npx bstage docs` → SLOT_CATALOG_V2.md
 *
 * 외부 API를 부르지 않습니다 — 어드민에는 아직 데이터를 가져오는 공식 수단이 없습니다.
 */
import { createTemplate } from '@bstage-sdk/react'
import ListNoticeWidget from '../../shared/admin/ListNoticeWidget'

export default function ContentsListNotice() {
  return (
    <ListNoticeWidget
      label="운영 안내"
      title="이 자리에 원하는 안내를 띄울 수 있어요"
      body="콘텐츠 목록 맨 위에 붙습니다. 등록 기준, 썸네일 규격, 이번 주 공지처럼 담당자가 콘텐츠를 만들기 전에 먼저 봐야 하는 내용을 넣기 좋습니다."
    />
  )
}

// createTemplate 은 반드시 모듈 최상위에서 호출합니다.
// name 은 Custom Element 태그명이라 하이픈이 하나 이상 들어가야 합니다.
createTemplate(ContentsListNotice, {
  name: 'sample-admin-contents-list-notice',
  slot: 'admin.contents-list.list:before',
})
