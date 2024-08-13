import React from 'react';
import TagsBlock from './TagsBlock';
import RecommendationBlock from './RecommendationBlock';
import './sideBarStyle.css'

const SidebarContainer = () => {
    return (
        <div className='mt-3 sidebar'>
            <TagsBlock />
            <RecommendationBlock />
        </div>
    );
};

export default SidebarContainer;