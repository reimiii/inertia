import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Pagination = ({links}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, k) => (
                    // <Link key={k} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }}/>
                    <li className={`page-item ${link.active && 'active'} ${link.url === null && 'disabled'}`} key={k}>
                        <Link disabled={link.url === null ? true : false} as={`button`} className="page-link" href={link.url}
                              dangerouslySetInnerHTML={{__html: link.label}}/>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;