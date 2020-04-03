import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from "./app.component";

import { ProjectsComponent } from "./components/projects/projects.component";
import { CreateComponent } from "./components/create/create.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { ErrorComponent } from "./components/error/error.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,

    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
