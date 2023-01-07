import React from 'react'

export const View = ({diarys}) => {
  return diarys.map(diary=>(
    <tr key={diary.date}>
        <td className='border border-slate-700'> {diary.date}</td>
        <td className='border border-slate-700'>{diary.title}</td>
        <td className='border border-slate-700'>{diary.text}</td>
    </tr>
  ))
}
