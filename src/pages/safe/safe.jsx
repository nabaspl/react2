import React, { Component } from 'react';
import './style.css'
import Aside from '../../components/layout/aside/aside';
import Section from '../../components/layout/section/section';
import SafeTypeLists from '../../components/safeComponents/safeTypeList/safeTypeList';
import SearchBox from '../../components/safeComponents/searchInSafe/safeSearchInput';
import CreateSafe from '../../components/safeComponents/createSafe/createSafe';
import {SafeLists} from '../../components/safeComponents/safeList/safeLists.js';
import { Fragment } from 'react/cjs/react.production.min';

import bannerImage  from '../../assets/images/bannerImage.svg'
import addFolderIcon  from '../../assets/images/addFolderIcon.svg'
import secretsLockerImage  from '../../assets/images/secretsLockerImage.svg'
import {useSelector} from 'react-redux'
import store from '../../redux/store';
import {createSecret} from '../../redux/safe/actions'

export default function Safe(){ 
    const safeLists = useSelector((state) => state.SafeReducer.safes)
    store.dispatch(createSecret(safeLists));
        return <main className="main-content">
            <div className="main-wrapper">
                <Aside value={renderAside(safeLists)}/>
                <Section value={renderSection()}/>
            </div>
        </main>;
    }
    
    

   function renderAside(safeLists){
        return <Fragment>
            <div className="aside-top">
                <SafeTypeLists safesCount={safeLists.length}/>
                <SearchBox/>
            </div>
            <div className="aside-body">
            <div className="safes-list-wrapper">
            <ul className="safe-lists">
                {safeLists.map((safe,index) => 
                        <SafeLists 
                        key={index} 
                        index={index}
                        safeId={safe.id}  
                        safeName={safe.safeName} 
                        safeDesc={safe.safeDescription}
                        isSelected={safe.isSelected}
                        />
                )}
            </ul>
                <CreateSafe isIcon={safeLists.length}/>
            </div>
            </div>
        </Fragment>;
    }

    function renderSection(){
        return  <div className="section-wrapper">
                <div className="banner-image-container">
                    <img src={bannerImage} className="banner-img"/>
                    <div className="section-info">
                        <h1>No Safes Created Yet</h1>
                        <p>Create a Safe to see your secrets, folders and permissions here</p>
                    </div>
                </div>
                <section className="secret-section">
                    <div className="panel">
                        <div className="panel-header">
                            <ul className="panel-header-lists-left">
                                <li className="active-panel">Secrets</li>
                                <li>Permissions</li>
                                </ul>
                                <ul className="panel-header-lists-right">
                                    <li>Add Folder</li>
                                    <li><img src={addFolderIcon} className="addFolderIcon"/></li>
                                </ul>
                        </div>
                        <div className="panel-body">
                            <div className="secret-lists">
                                <span className="secrets-count">0 Secrets</span>
                            </div>
                            <div className="create-secret-wrapper">
                                <img src={secretsLockerImage} className="secretsLockerImage"/>
                                <p className="about-secrete">Add a <span className="focus-content">Folder</span> and then you’ll be able to add <span className="focus-content">Secrets</span> to view them all here</p>
                                <button className="create-new-secret">+ Add</button>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
    }
    