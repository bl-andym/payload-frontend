import React from 'react'
import { blocks } from '@/blocks/blockList'

const RenderBlocks = ({ layout }) => (
    <div>
        {layout.map((block, i) => {
            const Block = blocks[block.blockType]
            if (Block) {
                return <Block key={i} {...block} />
            }
            return null
        })}
    </div>
)

export default RenderBlocks