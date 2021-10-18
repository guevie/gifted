import { PostAction} from "./actions/post.actions"
import { render } from '@testing-library/react'
import React from 'react'

test('scénario dexemple', function(){
    render(<PostAction title="Bonjour les gens"><div id="demo"></div></PostAction>)
    const demo = document.querySelector('#demo')
    expect(demo).toBeNull()
})