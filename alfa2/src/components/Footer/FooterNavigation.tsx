import styles from "./FooterNavigation.module.css"

export interface LinkItem {
    link:string,
    label:string,
}

export interface FooterNavigationProps {
    linkList: LinkItem[],
    title: string
}


// Impressum und Copyright

const FooterNavigation = (props: FooterNavigationProps) => {
    return (
        <>
            <h2>{props.title}</h2>
            <nav className={styles['footer-nav']}>
            <ul>
                {props.linkList.map((item: any, index:number) => (
                        <li key={index}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                    )
                )}
            </ul>
            </nav>
        </>)
}

export default FooterNavigation