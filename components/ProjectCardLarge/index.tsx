import { Content } from "components/Content"
import { toJS } from "mobx"
import { observer } from "mobx-react"
import { store } from "store"
import image from '../../assets/images/default-image.png';
import styled from "styled-components"
import { useLang } from "store/lang"
import { IProject } from "types";

interface IProps{
    project: IProject
}

export const ProjectCardLarge = observer(({project}: IProps) => {
    const lang = useLang()
    const date = new Date(project?.createdAt)
    
    return(
        <Wrapper style={{color: store.isDark ? 'white' : 'black'}}>
            <div>
                <h1>{project?.name}</h1>
                <Image src={image.src} />
            </div>
            <Desc>
                <h2>Описание</h2>
                <p>{project?.description}</p>
                <p>{`Дата создания: ${date.toLocaleDateString()}`}</p>
            </Desc>
        </Wrapper>
    )
})
const Wrapper = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 120px;
`;
const Image = styled.img`
    width: 500px
`
const Desc = styled.div`
    width: 500px;
`