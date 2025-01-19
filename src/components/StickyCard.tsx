import styled from 'styled-components'
import { useEffect, useRef } from 'react'

const Card = styled.div`
    height: 25rem;
    width: 35vmin;
    min-width: 250px;
    background-color: #7ca54e;
    z-index: 2;
    position: absolute;
    top: 150px;
    right: 200px;
    transition: opacity 1s ease;
`

const Page = styled.div<{
    $height?: string
    $bgColor: string
    $zIndex?: number
}>`
    height: ${(props) => props.$height || '100vh'};
    background-color: ${(props) => props.$bgColor};
    z-index: ${(props) => props.$zIndex};
    position: relative;
`

const StickyCard = () => {
    const page1Ref = useRef<HTMLDivElement | null>(null)
    const page2Ref = useRef<HTMLDivElement | null>(null)
    const cardRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = cardRef.current
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.target === containerRef.current) {
                        console.log(entry.boundingClientRect)
                        if (entry.isIntersecting) {
                            card!.style.position = 'fixed'
                        } else {
                            card!.style.position = 'absolute'
                        }
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [])

    return (
        <>
            <Page $bgColor={'#f1faee'}></Page>
            <Page $bgColor={'#a8dadc'}></Page>
            <div
                ref={containerRef}
                style={{ height: '200vh', position: 'relative' }}
            >
                <Card ref={cardRef}></Card>
                <Page
                    ref={page1Ref}
                    $height={'85vh'}
                    $bgColor={'#1d3557'}
                ></Page>
                <Page ref={page2Ref} $bgColor={'#e63946'} $zIndex={3}></Page>
                <Page $bgColor={'#457b9d'}></Page>
            </div>
        </>
    )
}

export default StickyCard
