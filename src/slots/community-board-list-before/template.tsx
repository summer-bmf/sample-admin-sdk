/**
 * 샘플 — 게시판 목록 위 안내 위젯 (SDK 슬롯 · ADMIN)
 *
 * 이 파일이 짧은 게 핵심입니다.
 * 슬롯 파일은 "어느 자리에 붙을지"만 정하고, 실제 위젯은 src/shared/ 에 둡니다.
 * 그래서 옆의 contents-list-before/template.tsx 도 같은 ListNoticeWidget 을 씁니다 —
 * 한 위젯을 자리만 바꿔 여러 곳에 붙일 수 있습니다.
 *
 *   slot: 'admin.community-board-list.list:before'  →  게시판 목록 바로 위
 *   산출물 이름: admin.community-board-list.list--before  (slot 값의 `:` → `--`)
 *
 * 외부 API를 부르지 않습니다 — 화면에 쓰는 값은 전부 props 로 넘깁니다.
 */
import { createTemplate } from '@bstage-sdk/react'
import ListNoticeWidget from '../../shared/admin/ListNoticeWidget'

export default function CommunityBoardListNotice() {
  return (
    <ListNoticeWidget
      label="커뮤니티 운영"
      title="게시판을 만들기 전에 확인해주세요"
      body="게시판 목록 맨 위에 붙습니다. 게시판 개설 기준이나 노출 규칙처럼, 새 게시판을 만들기 전에 알아야 하는 내용을 넣기 좋습니다."
    />
  )
}

createTemplate(CommunityBoardListNotice, {
  name: 'sample-admin-community-board-list-notice',
  slot: 'admin.community-board-list.list:before',
})
