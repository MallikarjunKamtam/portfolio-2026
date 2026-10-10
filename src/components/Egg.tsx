import { profile } from '../data'

export function Egg({ onClose }: { onClose: () => void }) {
  return (
    <div className="egg" role="dialog" aria-label="easter egg" onClick={onClose}>
      <div className="term" onClick={(e) => e.stopPropagation()}>
        <div className="term-bar">
          <i />
          <i />
          <i />
          <span>root@{profile.handle}</span>
        </div>
        <pre>
{`❯ sudo unlock --konami
[ok] access granted

   ╦╔═╔═╗╔╗╔╔═╗╔╦╗╦
   ╠╩╗║ ║║║║╠═╣║║║║
   ╩ ╩╚═╝╝╚╝╩ ╩╩ ╩╩

you found it. that is the kind of
curiosity i want on a team.

❯ hire --contact ${profile.email}`}
        </pre>
      </div>
      <button className="close" onClick={onClose}>
        [esc] close
      </button>
    </div>
  )
}
