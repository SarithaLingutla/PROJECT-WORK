import React from "react";
const Prefer = props => {
    return (
        <div>
          <div className="mt-3 ml-3">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link " id="pills-home-tab" data-toggle="pill" href="/mostPopular" role="tab" aria-controls="pills-mostPopular" aria-selected="true">Most Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="/newReleases" role="tab" aria-controls="pills-newReleases" aria-selected="false">New Releases</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-mixedCollection-tab" data-toggle="pill" href="/mixedCollection" role="tab" aria-controls="pills-mixedCollection" aria-selected="false">Mixed Collection</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-authorPreference-tab" data-toggle="pill" href="/authorPreference" role="tab" aria-controls="pills-authorPreference" aria-selected="false">author Preference</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-mostPopular" role="tabpanel" aria-labelledby="pills-mostPopular-tab"></div>
  <div class="tab-pane fade" id="pills-newReleases" role="tabpanel" aria-labelledby="pills-newReleases-tab"></div>
  <div class="tab-pane fade" id="pills-authorPreference" role="tabpanel" aria-labelledby="pills-authorPreference-tab"></div>
  <div class="tab-pane fade" id="pills-authorPreference" role="tabpanel" aria-labelledby="pills-authorPreference-tab"></div>

</div>

          {/*  <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="/">Most Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/newReleases">New Releases</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="mixedCollection">Mixed Collection</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="authorPreference">Author Preference</a>
  </li>
</ul>*/} 
</div>
        </div>
    );
};
export default Prefer;