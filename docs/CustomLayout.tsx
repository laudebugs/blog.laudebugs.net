export const CustomLayout = ({ children }: any) => {
    return (
        <div>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/getting-started">Getting Started</a>
                    <a href="/example">Example</a>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}