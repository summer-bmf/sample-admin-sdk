/**
 * 샘플 — 어드민 커스텀 페이지 (SDK · ADMIN)
 *
 * 이 파일이 놓인 위치가 곧 배포 경로입니다.
 *   src/pages/sample-admin-page/template.tsx  →  /sample-admin-page
 *
 * 어드민 템플릿도 유저와 같은 패키지·같은 명령으로 만듭니다. 다른 건 두 가지뿐입니다.
 *   1. package.json 에 { "bstage": { "target": "admin" } }
 *   2. 디자인 토큰을 @bstage-sdk/design/admin 에서 가져옴 (라이트 전용)
 *
 * 한 레포는 유저 아니면 어드민 하나입니다. src/pages 폴더 구조가 배포 경로라
 * 유저 /settings 와 어드민 /settings 를 한 레포에 둘 수 없기 때문입니다.
 *
 * 외부 API를 부르지 않습니다 — 어드민에는 아직 데이터를 가져오는 공식 수단이 없어
 * 화면에 쓰는 값은 전부 이 파일 안에 있습니다.
 */
import { createTemplate } from '@bstage-sdk/react'
import { cssVar, fontFamily, shadow, textStyle } from '@bstage-sdk/design/admin'
import ListNoticeWidget from '../../shared/admin/ListNoticeWidget'

// ── 화면에 쓰는 내용 (서버 없이 동작하도록 파일 안에 둡니다) ──────────────
const BASICS = [
  {
    title: '파일 위치가 곧 배포 경로',
    body: 'src/pages 아래 폴더 구조가 그대로 주소가 됩니다. 이 페이지는 sample-admin-page 폴더에 있어서 /sample-admin-page 로 열립니다.',
  },
  {
    title: '어드민 디자인 토큰을 씁니다',
    body: "색과 글자를 직접 적지 않고 @bstage-sdk/design/admin 의 토큰으로 씁니다. 어드민은 라이트 모드만 있어서 유저 템플릿처럼 다크 대응을 따로 챙기지 않아도 됩니다.",
  },
  {
    title: '스타일은 문자열로 넘깁니다',
    body: "CSS 파일을 그냥 import 하면 배포 산출물에서 사라집니다. 산출물이 template.js 하나뿐이라 그렇습니다. ?inline 을 붙여 문자열로 가져와 styles 옵션에 넘기세요.",
  },
]

const css = `
  .card { transition: box-shadow .15s ease; }
  .card:hover { box-shadow: ${shadow['default-small']}; }
  @media (max-width: 720px) {
    .grid { grid-template-columns: 1fr !important; }
  }
`

export default function SampleAdminPageTemplate() {
  return (
    <div
      style={{
        fontFamily,
        // 어드민 본체와 같은 바탕색이라, 내용이 짧아도 화면이 잘려 보이지 않게 채웁니다.
        minHeight: '100vh',
        background: cssVar('bg/bstage-admin'),
        color: cssVar('text/primary'),
        padding: '32px 24px 48px',
      }}
    >
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        {/* ── 머리말 ──────────────────────────────────────────── */}
        <p
          style={{
            ...textStyle('11/title/med'),
            margin: '0 0 8px',
            color: cssVar('text/blue'),
            letterSpacing: '0.08em',
          }}
        >
          B.STAGE SDK SAMPLE · ADMIN
        </p>

        <h1 style={{ ...textStyle('24/title/med'), margin: '0 0 10px', textWrap: 'balance' }}>
          어드민 커스텀 페이지는 이렇게 만듭니다
        </h1>

        <p
          style={{
            ...textStyle('14/title/med'),
            margin: '0 0 28px',
            maxWidth: '62ch',
            color: cssVar('text/secondary'),
          }}
        >
          외부 서버 없이 그대로 동작하는 샘플입니다. 복사해서 내용을 바꾸는 것부터
          시작해 보세요.
        </p>

        {/* ── 기본 3가지 ───────────────────────────────────────── */}
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 12,
            marginBottom: 32,
          }}
        >
          {BASICS.map((item) => (
            <article
              key={item.title}
              className="card"
              style={{
                boxSizing: 'border-box',
                padding: '18px 16px',
                borderRadius: 10,
                border: `1px solid ${cssVar('border/default-a')}`,
                background: cssVar('bg/grouped-default'),
              }}
            >
              <h2 style={{ ...textStyle('14/title/med'), margin: '0 0 8px' }}>{item.title}</h2>
              <p
                style={{
                  ...textStyle('13/body/reg'),
                  margin: 0,
                  color: cssVar('text/secondary'),
                }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>

        {/* ── 슬롯 위젯 미리보기 ───────────────────────────────── */}
        <section
          style={{
            boxSizing: 'border-box',
            padding: '20px 22px',
            borderRadius: 10,
            border: `1px solid ${cssVar('border/default-a')}`,
            background: cssVar('bg/grouped-default'),
            marginBottom: 12,
          }}
        >
          <h2 style={{ ...textStyle('16/title/med'), margin: '0 0 6px' }}>슬롯 위젯</h2>
          <p
            style={{
              ...textStyle('13/body/reg'),
              margin: '0 0 18px',
              maxWidth: '62ch',
              color: cssVar('text/secondary'),
            }}
          >
            페이지 전체가 아니라 어드민 화면 &ldquo;사이&rdquo;에 끼워 넣는 조각입니다. 아래가
            실제로 붙게 될 위젯이고, 코드는 <code>src/shared/admin/ListNoticeWidget.tsx</code>{' '}
            에 있습니다. 슬롯 파일은 어느 자리에 붙일지만 정합니다.
          </p>

          {/* 실제 슬롯 자리에 붙을 위젯을 여기서 그대로 렌더해 눈으로 확인합니다. */}
          <div
            style={{
              padding: 16,
              borderRadius: 8,
              background: cssVar('bg/grouped-strong'),
            }}
          >
            <ListNoticeWidget
              label="운영 안내"
              title="이 자리에 원하는 안내를 띄울 수 있어요"
              body="콘텐츠 목록이나 게시판 목록 맨 위에 붙습니다. 등록 기준, 운영 규칙, 이번 주 공지처럼 담당자가 작업을 시작하기 전에 먼저 봐야 하는 내용을 넣기 좋습니다."
            />
            <p
              style={{
                ...textStyle('12/body/reg'),
                margin: 0,
                textAlign: 'center',
                color: cssVar('text/tertiary-a'),
              }}
            >
              — 여기부터 어드민의 원래 목록 화면 —
            </p>
          </div>
        </section>

        {/* ── 지금 알아둘 것 ───────────────────────────────────── */}
        <section
          style={{
            boxSizing: 'border-box',
            padding: '18px 20px',
            borderRadius: 10,
            // 경고가 아니라 참고 사항이라, 눈에 띄는 색 대신 한 단계 낮춘 바탕을 씁니다.
            border: `1px solid ${cssVar('border/default-a')}`,
            background: cssVar('bg/grouped-strong'),
          }}
        >
          <h2 style={{ ...textStyle('14/title/med'), margin: '0 0 8px' }}>
            어드민 데이터는 아직 가져올 수 없습니다
          </h2>
          <p
            style={{
              ...textStyle('13/body/reg'),
              margin: 0,
              maxWidth: '62ch',
              color: cssVar('text/secondary'),
            }}
          >
            유저 템플릿은 <code>BstageClient</code> 로 API를 부를 수 있지만, 어드민은 인증
            방식이 달라 아직 해당하는 수단이 없습니다. 그래서 이 샘플은 화면에 쓰는 값을
            전부 코드 안에 두었습니다. 어드민용 호출 방법이 생기면 실제 데이터를 쓰는
            샘플을 따로 추가할 예정입니다. 경로를 임의로 만들어 호출하지 마세요.
          </p>
        </section>
      </div>
    </div>
  )
}

// createTemplate 은 반드시 모듈 최상위에서 호출합니다.
// name 은 Custom Element 태그명이라 하이픈이 하나 이상 들어가야 합니다.
createTemplate(SampleAdminPageTemplate, {
  name: 'sample-admin-page',
  styles: css,
})
