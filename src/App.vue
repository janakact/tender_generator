<template>
  <div id="app">
    <table class="row">
      <tr>
        <td width="50%">
          <task-list :tasks="tasks"></task-list>
        </td>
        <td width="50%">
          <tender :tasks="tasks"></tender>
        </td>
      </tr>
    </table>

  </div>
</template>


<script>
import TaskList from './TaskList.vue'
import Tender from './Tender.vue'

export default {
  name: 'app',
  components: { TaskList, Tender },
  data: () => ({
    tasks: [{
      title: `Credit Guarantee Fund Trust for Micro and Small Enterprises (hereinafter referred to as Trust) is a trust formed by Govt. of India and SIDBI for providing guarantee to the credit facilities extended by banks and financial institutions to Micro and Small Enterprises. The Trust is operating from its Mumbai Office and Chennai cell.`,
      completed: true
    },
    {
      title: `In order to meet the hardware requirement at its Mumbai Office, the Trust invites
sealed bids from eligible bidders for the supply, installation and commissioning of
computer hardware (Desktop PCs / Laptops / Monitors) along with operating system
and other peripherals to its office at Mumbai against buyback of existing Desktop
PCs in as is where is condition. The number of old PCs available under buyback is
given in Annexure VI.`,
      completed: false
    },
    {
      title: `Tender methodology proposed to be adopted by the Trust will be “TWO Bid
system” i.e. Technical Bid and Commercial Bid with Technical bid containing prequalification
also. The Trust would enter into contract with the bidder who qualify prequalification,
technical bid and whose commercial bid is found to be Lowest
Commercial Bid [L-1].`,
      completed: false
    },
    {
      title: `Minimum Eligibility Criteria / Pre-qualification criteria:
       Should be Original Equipment Manufacturers (OEM) / Authorised Dealer
(AUD)/Distributor of OEM.
 `,
      completed: false
    },
    {
      title: `The Bidder as authorised agent, has supplied installed and commissioned
computer hardware and peripherals of the kind required by the Trust and
has provided after sales service satisfactorily and such computer hardware
and peripherals must be in satisfactory operation for at least 2 years on
the date of Bid opening and must be providing annual maintenance
services for the above installations.`,
      completed: false
    },
    {
      title: `Should be a Registered Company.`,
      completed: true
    },
    {
      title: `Should be in existence in core Computer hardware sales and services
business for the last five (5) years.`,
      completed: false
    },
    {
      title: `should have minimum average turnover or 1 Crore per annum out of Indian
Operations from the sale of computer hardware during the last three (3) years
ending March 2010. In case of Bidder not himself the manufacturer, the
turnover should be of its own and not that of the principal.`,
      completed: false
    }
    ]
  })
}
</script>

<style>
body {
  background-color: #abc;
}

*,
h1,
button {
  font-family: 'Nunito', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.tasks {
  width: 90%;
  max-width: 45rem;
  padding: 1em;
  margin: 1em auto;
  overflow: auto;
  background-color: #fff;
  box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.25);
}

td {
  vertical-align: top;
}


.tasks__list {
  clear: both;
}

.tasks__item {
  margin-bottom: 0.5em;
  position: relative;
}

.tasks__item__toggle {
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 0.85em 2.25em 0.85em 1em;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.tasks__item__toggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.15);
}

.tasks__item__toggle--completed {
  background-color: rgba(0, 128, 0, 0.25);
  border-color: rgba(0, 128, 0, 0.2);
}

.tasks__item__toggle--completed:hover {
  background-color: rgba(0, 128, 0, 0.15);
  border-color: rgba(0, 128, 0, 0.3);
}

.tasks__item__remove {
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.tasks__item__remove i {
  vertical-align: middle;
}
</style>
