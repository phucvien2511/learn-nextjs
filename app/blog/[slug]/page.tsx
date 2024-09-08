import { FC } from "react";
type BlogProps = {
    params: {
        slug: string;
    };
};

const Blog: FC<BlogProps> = ({ params }) => {
    return <div>Welcome to blog ID: {params.slug}</div>;
};

export default Blog;
