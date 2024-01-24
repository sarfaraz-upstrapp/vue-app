<template>
    <v-row>
        <v-col cols="12" sm="4" md="3" lg="3" xxl="2" v-for="card in topCardsData" :key="card.title">
            <v-card
                @click="goToLink(card)"
                :class="
                    'cursor-pointer text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6  bg-' + card.bgcolor
                "
                elevation="1"
            >
                <div :class="'bg-' + card.bgcolor">
                    <img :src="card.img" alt="icon" width="50" />
                    <div :class="'text-subtitle-1 text-capitalize font-weight-bold mt-3 text-' + card.textcolor" v-text="card.title"></div>
                    <h4 :class="'text-h4 mt-1 text-' + card.textcolor" v-text="card.number"></h4>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { router } from '@/router';

import staff from '@/assets/images/svgs/staff.svg';
import client from '@/assets/images/svgs/client.svg';
import mailbox from '@/assets/images/svgs/icon-mailbox.svg';
import PendingTax from '@/assets/images/svgs/panding-file.svg';
import duefiling from '@/assets/images/svgs/due-filing.svg';
import card_icon6 from '@/assets/images/svgs/icon-connect.svg';
import icon_dd_application from '@/assets/images/svgs/icon-dd-application.svg';

// icon-account

import type { topCards } from '@/types/components/dashboard/modernDashboard';
import { onMounted, reactive } from 'vue';

import DashBoardService from '@/services/dashboardServices/dashboard.api';

// import { topCardsData } from '@/_mockApis/components/dashboard/modernData';

// const props: any = defineProps({ topCardsData: Array });

onMounted(() => {
    setCardsData();
});

onMounted(() => {
    setCardsData;
});

let topCardsData: topCards[] = reactive([
    {
        key: 'membersCount',
        img: staff,
        title: 'Staff',
        number: '0',
        bgcolor: 'lightsecondary',
        textcolor: 'secondary',
        toLink: '/apps/members'
    },
    {
        key: 'clientsCount',
        img: client,
        title: 'Clients',
        number: '0',
        bgcolor: 'lightsecondary',
        textcolor: 'secondary',
        toLink: '/apps/clients'
    },
    {
        key: 'pendingTaxFilingsCount',
        img: PendingTax,
        title: 'Pending Tax Filings',
        number: '0',
        bgcolor: 'lightsecondary',
        textcolor: 'secondary',
        toLink: '/apps/tax-filing'
    },
    {
        key: 'overDue',
        img: duefiling,
        title: 'Overdue Tax Filings',
        number: '0',
        bgcolor: 'lightsecondary',
        textcolor: 'secondary',
        toLink: '/apps/tax-filing'
    }
]);

// Redirect on Tab

const goToLink = (cardItem: topCards) => {
    // router.push({
    //     path: cardItem.toLink,
    //     params: { status: cardItem.status }
    // });
    if (cardItem.key == 'pendingTaxFilingsCount') {
        router.push({
            path: cardItem.toLink,
            query: { status: 2 }
        });
    } else if (cardItem.key == 'overDue') {
        router.push({
            path: cardItem.toLink,
            query: { status: 4 }
        });
    } else {
        router.push({
            path: cardItem.toLink
        });
    }

    // router.push({ path: cardItem.toLink, params: { status: cardItem?.status } });
};

const setCardsData = () => {
    setMembersCount();
    setClientsCount();
    setPendingTaxFilingCount();
    setOverDue();
    // setRevenueCount();
};

const setMembersCount = async () => {
    const response: any = await fetchMemberCountsCounts({});
    const count = response?.data?.total; // get this by API Call
    const memberCard = topCardsData.find((ele) => ele.key === 'membersCount');
    if (memberCard) {
        memberCard.number = String(count || 0);
    }
};

const setClientsCount = async () => {
    const response: any = await fetchClientCounts({});
    const count = response?.data?.total; // get this by API Call
    const clientCard = topCardsData.find((ele) => ele.key === 'clientsCount');
    if (clientCard) {
        clientCard.number = String(count || 0);
    }
};

const setPendingTaxFilingCount = async () => {
    const response: any = await fetchTaxFilingCounts({});

    const count = response?.data?.total; // get this by API Call
    const pendingTaxFilingCard = topCardsData.find((ele) => ele.key === 'pendingTaxFilingsCount');
    if (pendingTaxFilingCard) {
        pendingTaxFilingCard.number = String(count || 0);
    }
};

// setOverDue

const setOverDue = async () => {
    const response: any = await fetchOverDueCounts({});
    const count = response?.data?.total; // get this by API Call
    const pendingTaxFilingCard = topCardsData.find((ele) => ele.key === 'overDue');
    if (pendingTaxFilingCard) {
        pendingTaxFilingCard.number = String(count || 0);
    }
};

const setRevenueCount = async () => {
    const response: any = await fetchRevenueCounts({});
    const count = response?.data?.total; // get this by API Call

    const revenueCard = topCardsData.find((ele) => ele.key === 'revenueCount');
    if (revenueCard) {
        revenueCard.number = String(count);
    }
};

// API Call::

const fetchClientCounts = async (qParams: any) => {
    try {
        const response = await DashBoardService.fetchDashboardClientCounts(qParams);
        return response;
    } catch (error) {
        console.error(error || 'Wrong Services');
        // return error;
    }
};

const fetchMemberCountsCounts = async (qParams: any) => {
    try {
        const response = await DashBoardService.fetchDashboardMemberCountsCounts(qParams);
        return response;
    } catch (error) {
        console.error(error || 'Wrong Services');
        // return error;
    }
};
//
const fetchOverDueCounts = async (qParams: any) => {
    try {
        const response = await DashBoardService.fetchDashboardOverDueCounts(qParams);
        return response;
    } catch (error) {
        console.error(error || 'Wrong Services');
        // return error;
    }
};

const fetchTaxFilingCounts = async (qParams: any) => {
    try {
        const response = await DashBoardService.fetchDashboardTaxFilingCounts(qParams);
        console.log('fetchTaxFilingCounts response >>>', response);

        return response;
    } catch (error) {
        console.error(error || 'Wrong Services');
        // return error;
    }
};

// fetchDashboardRevenueCounts
const fetchRevenueCounts = async (qParams: any) => {
    try {
        const response = await DashBoardService.fetchDashboardRevenueCounts(qParams);
        return response;
    } catch (error) {
        console.error(error || 'Wrong Services');
        // return error;
    }
};
</script>
