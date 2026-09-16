/**
 * 샘플 — 목록 위 안내 위젯 (어드민)
 *
 * 슬롯에 꽂을 위젯의 "본체"입니다. 슬롯 파일(src/slots/)은 어느 자리에 붙을지만
 * 정하고, 실제로 그리는 코드는 이렇게 shared 아래에 둡니다. 그래야 자리를 늘리거나
 * 옮길 때 createTemplate 한 줄만 손대면 되고, 같은 위젯을 여러 자리에 쓸 수 있습니다.
 *
 * 외부 API를 부르지 않습니다 — 어드민에는 아직 데이터를 가져오는 공식 수단이 없습니다.
 * 화면에 쓰는 값은 전부 props로 받습니다.
 */
import type { ReactElement } from 'react'
import { cssVar, fontFamily, textStyle } from '@bstage-sdk/design/admin'

export type ListNoticeProps = {
  /** 왼쪽 위 작은 라벨 */
  label: string
  /** 한 줄 제목 */
  title: string
  /** 설명 본문 */
  body: string
}

export default function ListNoticeWidget({ label, title, body }: ListNoticeProps): ReactElement {
  return (
    <section
      style={{
        fontFamily,
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        margin: '0 0 16px',
        padding: '16px 18px',
        borderRadius: 10,
        border: `1px solid ${cssVar('border/blue-weak-a')}`,
        background: cssVar('surface/display-blue-weakest-a'),
        color: cssVar('text/primary'),
      }}
    >
      {/* 아이콘 자리 — 어드민은 라이트 전용이라 대비를 따로 챙길 필요가 없습니다. */}
      <span
        aria-hidden="true"
        style={{
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: cssVar('surface/form-blue'),
          color: cssVar('always/white100'),
          ...textStyle('12/body/bold'),
        }}
      >
        i
      </span>

      <div style={{ minWidth: 0 }}>
        <p
          style={{
            ...textStyle('11/title/med'),
            margin: 0,
            color: cssVar('text/blue'),
            letterSpacing: '0.06em',
          }}
        >
          {label}
        </p>
        <h2 style={{ ...textStyle('14/title/med'), margin: '4px 0 4px' }}>{title}</h2>
        <p
          style={{
            ...textStyle('13/body/reg'),
            margin: 0,
            color: cssVar('text/secondary'),
          }}
        >
          {body}
        </p>
      </div>
    </section>
  )
}
