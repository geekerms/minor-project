import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { CssubjectsComponent } from './pages/cssubjects/cssubjects.component';
import { IdeComponent } from './pages/ide/ide.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { JavaWelcomeComponent } from './forquiz/java-welcome/java-welcome.component';
import { JavaQuestionComponent } from './forquiz/java-question/java-question.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './quiz-derective/change-bg.directive';
import { WhatJComponent } from './javaTheory/what-j/what-j.component';
import { FeaturesJComponent } from './javaTheory/features-j/features-j.component';
import { JavaHomeComponent } from './javaTheory/java-home/java-home.component';
import { HelloJComponent } from './javaTheory/hello-j/hello-j.component';
import { ControlJComponent } from './javaTheory/control-j/control-j.component';
import { IfelseJComponent } from './javaTheory/ifelse-j/ifelse-j.component';
import { SwitchJComponent } from './javaTheory/switch-j/switch-j.component';
import { WhileJComponent } from './javaTheory/while-j/while-j.component';
import { DowhileJComponent } from './javaTheory/dowhile-j/dowhile-j.component';
import { ForJComponent } from './javaTheory/for-j/for-j.component';
import { BreakJComponent } from './javaTheory/break-j/break-j.component';
import { ContiJComponent } from './javaTheory/conti-j/conti-j.component';
import { DbmsHomeComponent } from './dbmsTheory/dbms-home/dbms-home.component';
import { WhatDComponent } from './dbmsTheory/what-d/what-d.component';
import { CharDComponent } from './dbmsTheory/char-d/char-d.component';
import { AppliDComponent } from './dbmsTheory/appli-d/appli-d.component';
import { ArchiDComponent } from './dbmsTheory/archi-d/archi-d.component';
import { ModelDComponent } from './dbmsTheory/model-d/model-d.component';
import { EntityDComponent } from './dbmsTheory/entity-d/entity-d.component';
import { RelationalDComponent } from './dbmsTheory/relational-d/relational-d.component';
import { SchemaDComponent } from './dbmsTheory/schema-d/schema-d.component';
import { IndeDComponent } from './dbmsTheory/inde-d/inde-d.component';
import { PythonWelcomeComponent } from './forquiz/python-welcome/python-welcome.component';
import { PythonQuestionComponent } from './forquiz/python-question/python-question.component';

import { WhatOComponent } from './osTheory/what-o/what-o.component';
import { OsHomeComponent } from './osTheory/os-home/os-home.component';
import { FeaOComponent } from './osTheory/fea-o/fea-o.component';
import { AppliOComponent } from './osTheory/appli-o/appli-o.component';
import { TypeOComponent } from './osTheory/type-o/type-o.component';
import { FuncOComponent } from './osTheory/func-o/func-o.component';
import { ProcOComponent } from './osTheory/proc-o/proc-o.component';
import { Pro2OComponent } from './osTheory/pro2-o/pro2-o.component';
import { Pro3OComponent } from './osTheory/pro3-o/pro3-o.component';
import { NetHomeComponent } from './networkTheory/net-home/net-home.component';
import { WhatNComponent } from './networkTheory/what-n/what-n.component';
import { FeaNComponent } from './networkTheory/fea-n/fea-n.component';
import { CompoNComponent } from './networkTheory/compo-n/compo-n.component';
import { OsiNComponent } from './networkTheory/osi-n/osi-n.component';
import { TcpipNComponent } from './networkTheory/tcpip-n/tcpip-n.component';
import { TopoNComponent } from './networkTheory/topo-n/topo-n.component';
import { MeshNComponent } from './networkTheory/mesh-n/mesh-n.component';
import { StarNComponent } from './networkTheory/star-n/star-n.component';
import { BusNComponent } from './networkTheory/bus-n/bus-n.component';
import { RingNComponent } from './networkTheory/ring-n/ring-n.component';
import { TreeNComponent } from './networkTheory/tree-n/tree-n.component';
import { CppHomeComponent } from './cppTheory/cpp-home/cpp-home.component';
import { WhatCppComponent } from './cppTheory/what-cpp/what-cpp.component';
import { ProgCppComponent } from './cppTheory/prog-cpp/prog-cpp.component';
import { VarCppComponent } from './cppTheory/var-cpp/var-cpp.component';
import { DatatypesCppComponent } from './cppTheory/datatypes-cpp/datatypes-cpp.component';
import { OpCppComponent } from './cppTheory/op-cpp/op-cpp.component';
import { IfelseCppComponent } from './cppTheory/ifelse-cpp/ifelse-cpp.component';
import { SwitchCppComponent } from './cppTheory/switch-cpp/switch-cpp.component';
import { ForCppComponent } from './cppTheory/for-cpp/for-cpp.component';
import { WhileCppComponent } from './cppTheory/while-cpp/while-cpp.component';
import { DowhileCppComponent } from './cppTheory/dowhile-cpp/dowhile-cpp.component';
import { BreakCppComponent } from './cppTheory/break-cpp/break-cpp.component';
import { ContiCppComponent } from './cppTheory/conti-cpp/conti-cpp.component';

import { CHomeComponent } from './cTheory/c-home/c-home.component';
import { WhatCComponent } from './cTheory/what-c/what-c.component';
import { FeaturesCComponent } from './cTheory/features-c/features-c.component';
import { HistoryCComponent } from './cTheory/history-c/history-c.component';
import { FirstCComponent } from './cTheory/first-c/first-c.component';
import { CompilationCComponent } from './cTheory/compilation-c/compilation-c.component';
import { VariableCComponent } from './cTheory/variable-c/variable-c.component';
import { KeywordCComponent } from './cTheory/keyword-c/keyword-c.component';
import { DatatypeCComponent } from './cTheory/datatype-c/datatype-c.component';
import { IfelseCComponent } from './cTheory/ifelse-c/ifelse-c.component';
import { SwitchCComponent } from './cTheory/switch-c/switch-c.component';
import { WhileCComponent } from './cTheory/while-c/while-c.component';
import { DowhileCComponent } from './cTheory/dowhile-c/dowhile-c.component';
import { ForCComponent } from './cTheory/for-c/for-c.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammingComponent,
    CssubjectsComponent,
    IdeComponent,
    QuizComponent,
    HomeComponent,
    JavaWelcomeComponent,
    JavaQuestionComponent,
    ChangeBgDirective,
    WhatJComponent,
    FeaturesJComponent,
    JavaHomeComponent,
    HelloJComponent,
    ControlJComponent,
    IfelseJComponent,
    SwitchJComponent,
    WhileJComponent,
    DowhileJComponent,
    ForJComponent,
    BreakJComponent,
    ContiJComponent,
    DbmsHomeComponent,
    WhatDComponent,
    CharDComponent,
    AppliDComponent,
    ArchiDComponent,
    ModelDComponent,
    EntityDComponent,
    RelationalDComponent,
    SchemaDComponent,
    IndeDComponent,
    PythonWelcomeComponent,
    PythonQuestionComponent,

    WhatOComponent,
    OsHomeComponent,
    FeaOComponent,
    AppliOComponent,
    TypeOComponent,
    FuncOComponent,
    ProcOComponent,
    Pro2OComponent,
    Pro3OComponent,
    NetHomeComponent,
    WhatNComponent,
    FeaNComponent,
    CompoNComponent,
    OsiNComponent,
    TcpipNComponent,
    TopoNComponent,
    MeshNComponent,
    StarNComponent,
    BusNComponent,
    RingNComponent,
    TreeNComponent,
    CppHomeComponent,
    WhatCppComponent,
    ProgCppComponent,
    VarCppComponent,
    DatatypesCppComponent,
    OpCppComponent,
    IfelseCppComponent,
    SwitchCppComponent,
    ForCppComponent,
    WhileCppComponent,
    DowhileCppComponent,
    BreakCppComponent,
    ContiCppComponent

    CHomeComponent,
    WhatCComponent,
    FeaturesCComponent,
    HistoryCComponent,
    FirstCComponent,
    CompilationCComponent,
    VariableCComponent,
    KeywordCComponent,
    DatatypeCComponent,
    IfelseCComponent,
    SwitchCComponent,
    WhileCComponent,
    DowhileCComponent,
    ForCComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
