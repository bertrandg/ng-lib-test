import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { Component, DebugElement }    from '@angular/core';

import { SplitComponent } from './split.component';
import { SplitAreaDirective } from './splitArea.directive';
import { SplitGutterDirective } from './splitGutter.directive';




@Component({
    selector: 'tester',
    template: `
        <split>
            <split-area><span class="aaa">AAA</span></split-area>
            <split-area><span class="bbb">BBB</span></split-area>
        <split>`,
})
export class TesterComponent {}


describe('SplitComponent', () => {

    let compTester:          TesterComponent;
    let fixtureTester:       ComponentFixture<TesterComponent>;

    // let compSplit:          SplitComponent;
    // let fixtureSplit:       ComponentFixture<SplitComponent>;

    // let dirSplitAreaA:      SplitAreaDirective;
    // let fixtureSplitAreaA:   ComponentFixture<SplitAreaDirective>;

    // let dirSplitAreaB:      SplitAreaDirective;
    // let fixtureSplitAreaB:   ComponentFixture<SplitAreaDirective>;

    // let dirSplitAreaC:      SplitAreaDirective;
    // let fixtureSplitAreaC:   ComponentFixture<SplitAreaDirective>;
    
    
    let de:                 DebugElement;
    let el:                 HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TesterComponent,
                SplitComponent,
                SplitAreaDirective,
                SplitGutterDirective,
            ],
        });

        fixtureTester = TestBed.createComponent(SplitComponent);
        compTester = fixtureTester.componentInstance;
        de = fixtureTester.debugElement.query(By.css('.aaa'));
        // el = de.nativeElement;

        // fixtureSplit = TestBed.createComponent(SplitComponent);
        // compSplit = fixtureSplit.componentInstance;

        // fixtureSplitAreaA = TestBed.createComponent(SplitAreaDirective);
        // dirSplitAreaA = fixtureSplitAreaA.componentInstance;

        // fixtureSplitAreaB = TestBed.createComponent(SplitAreaDirective);
        // dirSplitAreaB = fixtureSplitAreaA.componentInstance;

        // fixtureSplitAreaC = TestBed.createComponent(SplitAreaDirective);
        // dirSplitAreaC = fixtureSplitAreaA.componentInstance;

        // // query for the title <h1> by CSS element selector
        // de = fixtureSplit.debugElement.query(By.css('h1'));
        // el = de.nativeElement;
    });

    it('Should update areas length according to splitArea number', () => {
        expect(de).toBeDefined();
        expect(de.children).toEqual('AAAAAA');
    });

    // it('Should update areas length according to splitArea number', () => {
    //     expect(compSplit.areas.length).toEqual(0);

    //     compSplit.addArea(dirSplitAreaA, 1, 20, 10);
    //     expect(compSplit.areas.length).toEqual(1);
        
    //     compSplit.addArea(dirSplitAreaB, 2, 20, 10);
    //     expect(compSplit.areas.length).toEqual(2);
        
    //     compSplit.addArea(dirSplitAreaC, 3, 20, 10);
    //     expect(compSplit.areas.length).toEqual(3);
    // });
        
    // it('Should update visible areas length according to splitArea visible number', () => {
    //     compSplit.addArea(dirSplitAreaA, 1, 20, 10);
    //     compSplit.addArea(dirSplitAreaB, 2, 20, 10);
    //     compSplit.addArea(dirSplitAreaC, 3, 20, 10);
    //     expect(compSplit.areas.filter(a => a.component.visible).length).toEqual(3);

    //     dirSplitAreaA.visible = false;
    //     expect(compSplit.areas.filter(a => a.component.visible).length).toEqual(2);
        
    //     dirSplitAreaB.visible = false;
    //     expect(compSplit.areas.filter(a => a.component.visible).length).toEqual(1);
        
    //     dirSplitAreaC.visible = false;
    //     expect(compSplit.areas.filter(a => a.component.visible).length).toEqual(0);

    //     dirSplitAreaA.visible = true;
    //     expect(compSplit.areas.filter(a => a.component.visible).length).toEqual(1);
    // });
});
