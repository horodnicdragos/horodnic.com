const Page = props => (
    <main>
        <article>
            <div class="ph2 ph3-ns ph2-m ph3-l">
                <div class="pv3-l f3-l f4-m pv1-m measure center">
                    <h1 class="fw6 f3 f1-l">{props.title}</h1>
                    {props.subtitle &&
                        <h2 class="fw5 f4 f2-l">
                            {props.subtitle}
                        </h2>
                    }
                    {props.children}
                </div>
            </div>
        </article>
    </main>
)

export default Page
